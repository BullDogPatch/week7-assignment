import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>
  res.send(
    '<h1 style="color: red; text-align: center;">This is the root route</h1>'
  )
);

app.get('/comments', async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT * FROM comments`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Server is down :(' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT DISTINCT username FROM comments');

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server is down :(' });
  }
});

app.get('/comments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM comments WHERE id = $1', [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/post-comment', async (req, res) => {
  const { username, band_name, src, description, musical_rating } = req.body;
  try {
    const { rows } = await db.query(
      `INSERT INTO comments (username, band_name, src, description, musical_rating ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [username, band_name, src, description, musical_rating]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to post comment' });
  }
});

app.delete('/delete-comment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`DELETE FROM comments WHERE id = $1`, [id]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: 'comment deleted' });
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
});

app.patch('/comments/:id/likes', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      'UPDATE comments SET likes = likes + 1 WHERE id = $1 RETURNING likes;',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json({ likes: result.rows[0].likes });
  } catch (error) {
    console.error('Error updating likes:', error);
    res.status(500).json({ error: 'Failed to update likes' });
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
