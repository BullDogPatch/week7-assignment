Client: [client](https://week7-assignment-1.onrender.com/)  
Backend: [backend](https://week7-assignment-jw9m.onrender.com/users)

![comments table](<Screenshot 2025-02-02 203655.png>)
![seed data](<Screenshot 2025-02-02 203708.png>)
![wire frame 1](<Screenshot 2025-02-02 212500.png>)
![wire frame 2](<Screenshot 2025-02-02 212510.png>)

🎯 What requirements did you achieve?  
I feel like I got all the normal requirements finished.

It was the stretch goals that I seem to try and get out of the way first and then it leaves me scrambling for time to polish everything up.

I am not happy with the styling but if you can forgive that this week as it was not on the requirements, and if it was this - "As a user, I want the app to be fast and responsive so that I can browse without delays.", well I have interpreted responsive wrong, I thought this week it was about speed.

However everything seems to work fine, I have `/comments`, `/users`, `/comments/:id` and `/post-comment` routes all working in the front end using `react-router-dom`.

When the user posts a comment it navigates you to the `/comments` route using `useNavigate` from `react-router-dom`.

Also if the user deletes the comment from `/comments/:id` it navigates you back to the `/comments` route.

I do have a working `PATCH` method for updating the likes on the `/comments/:id` route, I could figure out how to get a working upvote and downvote so I left it with a working upvote.

My site is a extremely poor rip off of reddit, I wanted the top loading bar that reddit does. It sort of works using `react-top-loader`, here is the tutorial I followed [react-top-loader tutorial](https://www.youtube.com/watch?v=cDzfTkS4eoc).

I also have used `react-toastify` to give a success toast on posting comment and error toast if fails, also same if deleting a comment.

I have moved most of the fecth functions to a `api.js` file to help remove all the clutter from components, but at the last minute removed all the `try/catch`'s from `api.js` and put them in components as that is where I feel they should go (I am probably wrong).

All my goals are in `considerations.md`.

Hope you enjoy, if you can excuse the `/users` route styling.

One thing that annoyed me is that when the site is deployed using Render, you can't type the url like this https://week7-assignment-1.onrender.com/comments into the address bar you have to start of with the https://week7-assignment-1.onrender.com and navigate through using the links on the page, I don't know why this happens, i did look into it and you will see commits of me adding files and removing them to get it to work.

thinking now I know I should have implemented a back button.

Look forward to your feedback.
