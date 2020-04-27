![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)


# The Free Book Buggie Data Tool

## Description

_Duration: 2 week sprint_

The Free Book Buggie Data Tool is a web app made for The Free Book Buggie, a nonprofit organization based out of the Twin Cities that collects used children’s books before they end up in landfills and distributes them to underserved communities. 

The purpose of the website is to record data on the organization’s collecting and distribution of books and children served. Combined with demographics information of the children, this data can then be presented in many ways to facilitate the solicitation of donations or assist in grant writing.

To see the fully functional site, please visit: https://the-free-book-buggie.herokuapp.com/

## Screen Shot

<image src="documentation/images/Screen Shot 2020-04-05 at 9.16.27 PM.png" width=1000>
<image src="documentation/images/Screen Shot 2020-04-05 at 9.50.10 PM.png" width=1000>
	
## Installation

Before getting started, make sure you have the following software installed on your computer:
[Node.js](https://nodejs.org/en/)
[PostgreSQL](https://www.postgresql.org/)
[Nodemon](https://nodemon.io/)
Create a new database named `free_book_buggie`
Run the queries that are stored in the `database.sql` file to populate the tables and insert the values you’ll need. The project is built on [Postgres](https://www.postgresql.org/download/) so you will need to make sure to have that installed. [Postico](https://eggerapps.at/postico/) is recommended for running the queries.
In your terminal navigate to this project and `run npm install` to install all of the necessary dependencies.
Run `npm run server` to start the server
Run `npm run client` to start the server and open a new browser window.

## Usage 

Login to begin (the default username and password for development is:
username: admin
password: admin
To register a new user, click on register volunteer. Note, this does not log the current registered user out, this simply creates a new user. The idea of this is the admin should be the only person with the ability to register new users to the app. This is to ensure only trusted volunteers of the Free Book Buggie have access to the data.
User clicks on Organizations List or Contacts List to see all of the Organizations and Contacts the Free Book Buggie has in its database. These contact cards can be edited by clicking on the text. 
User clicks on “add new org” to create new organization, entering address and demographics information. 
User clicks on “add new event” to create a new event for the future. For future events the fields of “books collected”, “books distributed” and “number of children” can be left blank. If the user has an event that wasn’t made ahead of time users can enter in the values of those fields. 
The mobile recording button on the home screen allows a volunteer to record the number of books collected, distributed and number of kids served for an already created event. 

## Built With
	React.js, Redux, Material-UI, Chart.js, Axios, Node.js, Express, PG, and PostgreSQL.

## Acknowledgement
Thanks to Prime Digital Academy for their support during the project, and The Free Book Buggie for their work and inspiration. 


![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum. 

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * Footer/Footer
  * Nav/Nav
  * AboutPage/AboutPage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy
=======
## Support
	You can reach out to the four developers of this project with any questions:
	-	Peter DeMaio: pedemaio@gmail.com
	- 	Nic Payne: nicpaynedev@gmail.com
	- 	Russel Kerber: russell.kerber@gmail.com
	- 	Andy McElligott: andymc2315@gmail.com

