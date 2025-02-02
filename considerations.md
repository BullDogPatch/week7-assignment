### Backend

- Have root route ✅
- Have (GET) `/comments` route ✅
- Have (GET) `/comments/:id` route ✅
- Have (POST) `/post-comment` route ✅
- Have (DELETE) `/delete-comment/:id` route ✅
- Have (GET) `/users` route ✅

### Front End

- Add `react-router-dom` to create `/comments`, `/comments/4`, `/post-comment` and `/users` routes. ✅
- Display comments on `/comments` page. ✅
- Display comment by its id on `/comments/4` page. ✅
- Display a form to post a comment on `/post-comment` page and then navigate to `/comments` page on success. ✅
- Delete comment from the comments id page. ✅
- Style everything the best I can.
- Display a users page on `/users`, even though I dont have 2 tables I will query the user from supabase and add some fake data when render the users.✅

### Extras

- Have a message to say comment deleted before navigating back to `/comments` page (`react-toastify`), and same if unsuccessful. ✅
- Have a message to say post successful before navigating to `/comments` page (`react-toastify`), and same if unsuccessful. ✅
- Use `react-top-loader` or something similar to get the progress bar at the top like Reddit when the page transitions to a new page.
- Maybe put all the `fetch` functions into a seperate file to de-clutter the components. ✅
- Have (PUT) `/likes` route
- Update the users likes.

### An extra I would like.

- Use Tanstack Query to remove make my code look way neater. Have not used Tanstack Query for a couple year.
