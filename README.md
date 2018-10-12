# Starlight Movie Night App

This application allows users to create movie night events, assign them a list of suggested movies, and vote on the suggestions to select the top choice. It was made while thinking of groups of friends like mine that have fewer chances to get together and relax, so any chance to save time in a fun way helps.

## [Link to App](https://starlight-movie-app.herokuapp.com/)

## Technologies Used

- MERN stack: React.js, MongoDB, Express.js, Node.js
- External API integration
- Mongoose.js
- styled-components
- react-router-dom

## Credits
- [The Movie Database](https://www.themoviedb.org/) for APIs
- [CSS Tricks](https://css-tricks.com/forums/topic/trying-to-set-state-using-with-time-delay/) for setTimeOut delays and CSS modal tips

## App Features

- Creation of an Attendee List for each event based on all participating votes
- Responsive layout
- Partial handling to prevent "cheating" in the form of a single user adding multiple votes to one movie, including a checkUser function that requires voters to sign up as attending.
- Manipulation of React components and their states to deliver a responsive single-page application
- Full CRUD on "Movie Night" Event model, Create and Delete on "Suggestion" Movie model, and Create on "Attendee" Voter model

## Planning

### [User Stories on Trello](https://trello.com/b/1ge8rNdZ/movie-voting-app)

### Wireframes and ERDs

![Wireframe](https://66.media.tumblr.com/e5687b2d5399220ec27413b3d004c8ce/tumblr_pghsm8YEnt1uj0ljmo1_1280.jpg)
![ERD](https://66.media.tumblr.com/f098c95f64c9f9e199ad0d8462484798/tumblr_pghsm8YEnt1uj0ljmo2_r1_1280.jpg)

## Considerations

- __Attempting more robust animations and transitions on this project was fun, even if the results might not show completely.__ Experimenting with keyframes, transitons, and hover states reminded me of my favorite parts of my former job as UX designer, like really putting in moments of delight for the user. 

- __It was satisfying to incorporate external APIs to create a more robust, usable app.__ In particular, finding a way to display the results in a marginally user-friendly way via switching out components and manipulating state was an interesting challenge. 

- __I did have a number of reach goals that I set aside in order to add more polish to the app.__ For example, I had hoped to offer the option to get a random top choice among the suggestions; to enable "host" users who had admin privileges compared to others; to edit suggested movies/remove single votes; to show suggestions in descending order by vote; and to have handling for tied votes. Dreaming big!

- __Overall, I would like to learn more about authorizations that add security and permanence to each user account.__

- __I would also like to spend a little more time refactoring my code, especially my CSS.__

- __Finally, I would like to get more experience with CSS Frameworks in React.__