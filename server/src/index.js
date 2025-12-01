/*
/* --------------------------------

DB Fiddle Link: ______________
----------------------------------*/

/*----------------------------------
Boilerplate Code to Set Up Server
----------------------------------*/

// importing Node Modules
import express from "express";
import pg from "pg"; // pg stands for PostgreSQL, for connecting to the database
import config from "./config.js"; // importing the connection string to our database hosted on Neon

//connecting to our PostgreSQL database, or db for short
const db = new pg.Pool({
  // new pg.Pool() creates a connection to the database
  connectionString: config.databaseUrl, // credentials to access the database. Keep private!
  ssl: true, // use SSL encryption when connecting to the database to keep data safe
});

const app = express(); // create an instance of the Express module, which gives us access to all of Express's functions, methods, useful superpowers

app.use(express.json()); // This server will receive and respond to requests with JSON data

const port = 3000; // Setting which port to listen or receive requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
/*----------------------------------
Helper Functions (Test them in postman)
----------------------------------*/

//-------------------------------------
//📊 suggestions Helper Functions
//-------------------------------------

//Example
// 1. *GET /get-newest-user
// async function getNewestUser() {
//   // db.query() lets us query the SQL database
//   // It takes in one parameter: a SQL query!
//   const data = await db.query(
//     "SELECT * FROM users ORDER BY user_id DESC LIMIT 1"
//   );
//   return data.rows; // we have to use dot notation to get value of the rows property from the data object
// }

/*----------------------------------
API Endpoints
----------------------------------*/

//-------------------------------------
//📊 USERS
//-------------------------------------
// //example
// // 1. *GET /get-newest-user

// app.get("/get-newest-user", async (req, res) => {
//   const newestUser = await getNewestUser();
//   res.json(newestUser);
// });

/* 
app.post("/update-one-animal-name-with-error-handling", async (req, res) => {
  try {
    // Possible errors:
    // DONE: 400 Bad Request: what should we do when there's no body?
    // 500 Internal Server Error: when a unique constraint is violated
    // 404 Resource Not Found: using camelCase for the api endpoint
    // 404 Resource Not Found: no existing animal was found with the given id

    const { country_name, count } = req.body;

    // check for missing required fields in the request body: id and newName
    if (!country_name || !count) {
      // return error message with 400 Bad Request status code, because the request was badly formed with wrong syntax.
      // All 4xx status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error: Missing required fields");
    }

    await updateOneAnimalName(country_name, count);

    res.send(`Success! ${country_name}'s count was updated.`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
*/
