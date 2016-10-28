# NodeJS Server with Movies API
This server have two main purposes:
+ serve a public folder for static content: HTML/CSS and frontend javascript files.
+ serve a movies API

## Installation
Make sure to have installed NodeJS (https://nodejs.org/en/).

Then open cmd (command-line) and change directory to this folder (resources/node-server).

Then execute this command: `npm install`.


Finally copy your HTML/CSS and frontend javascript files to the /public folder.

## Run tests
To make sure that everything is installed properly, run API tests.

Run tests using this command: `npm test`

All tests should be in green.

## Run server
Run server by using this command: `npm start`

Then open a browser and navigate to http://localhost:8000/

From there you can see your static content placed on /public folder. 

So if you have an index.html on the public folder, this is the first thing you'll navigating to http://localhost:8000/

**NOTE:** For changing static content there is no need to stop/reset the server, a simple browser refresh should be enough. But for changing server code, you have to stop/start server manually.

Finally once server is running, check the API.
For example navigating to: `http://localhost:8000/api/movies`

While server is running you can see errors on the console (cmd) ocurring on the server and/or bad requests or not found URLs requested by the frontend.

## API
The API have a delay on all responses, to simulate real server timing.

#### Get Movies
The following URL is to get all movies without special parameters.
```
GET /api/movies
```

But also you can specify different parameters on the query string to be more specific like this:
```
GET /api/movies?search=mo&genre=Drama&order=rating&limit=3
```
The example above is a complete example of using all parameters, but all of the parameters are optional, it is not necessary to use all of them.

**Parameters:**

**search** - Search for a specific string (search=mo will get movies that match with mo).

**genre** - Search for movies on a specified genre (genre=Drama will get movies that belongs to this genre).

**limit** - Limit results to the given number (limit=3 will get up to 3 movies).

**order** - Set ordering, there are three options: 

+ *id* (by id, this is the default, ASC)
+ *released* (by released date, DESC)
+ *rating* (by rating, DESC)

#### Get a specific movie
The following URL is to get a specific movie by ID, in this case the movie with id=1.
```
GET /api/movies/1
```

#### Create a specific movie
The following URL to create a new movie.
```
POST /api/movies
```
By using POST method, you can send through the body of the request a json with the movies data, for example:
```javascript
{
	"title": "Lorem ipsum",
	"year":"2016",
	"released":"2016-04-29T00:00:00.0Z",
	"genre":"Action, Drama",
	"director":"John Doe",
	"actors":"Foo Bar, Dolor Sit",
	"plot":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor ipsum ut elit dignissim vestibulum. Nulla ullamcorper mauris in eros luctus luctus. Praesent id posuere tellus, et malesuada felis.",
	"poster":"https://s-media-cache-ak0.pinimg.com/236x/63/35/b3/6335b33481b913f437b4e395cf71f9b6.jpg",
	"rating": 2
}
```
Note that ID is not necessary, it is automatically created by the server. 
Also, make sure to validate that all values are ok before sending the data, some of them are required.
This method *returns* the ID of the newly created movie like this:
```javascript
{ id: 11 }
```

**Note:** While server is open, all movie will be persisted in memory on the server, but newly created movies will be removed when the server is stoped/reseted.

#### Get Genres
The following URL is to get all genres.
```
GET /api/genres/
```
