# OnTracker

It is a Habit Tracker app where we can track the habit of a person on weekly basis. which is built using Nodejs, Ejs , CSS, Javascript , Bootstrap.

# Features

* Add Habit

* Each Habit Track Weekly

  * Mark Habit as Done
  
  * Mark as Undone
  
  * Toggle to Default - No action setting
  
  * Delete a habit


# Folder Structure

* Index.js: Main JS file which connects to all modules, imports the different packages and is the first file which runs when the app is started.

* config/db.js: Connection to mongoose and the DB.

* assets: Contains the static files such as the CSS and the Images used on the application.

* models/habitModel.js: Contains the Schema for the DB Structure.

* routes/routes.js: Has the route set up and the various functions which are triggered when navigated to a route.

* views/index.ejs: The page which loads up when the app runs and the user interface with which the user interacts with.


# project dependencies

* body-parser

* dotenv

* ejs

* express

* mongoose

* nodemon
