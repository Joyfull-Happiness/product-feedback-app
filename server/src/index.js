/*
/* --------------------------------

DB Fiddle Link:https://www.db-fiddle.com/f/bRjECEC76H1E1kDQCVWyqC/11
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
//📊 Suggestions Helper Functions
//-------------------------------------
//1. *GET /get-all-suggestions
async function getAllSuggestions() {
  const data = await db.query("Select * FROM suggestions");
  return data.rows;
}

//2. GET /get-suggestions-by-category/:category
async function getSuggestionsByCategory(category) {
  const getSuggestionCategory = await db.query(
    "SELECT * FROM suggestions WHERE category = $1 ",
    [category]
  );
  return getSuggestionCategory.rows;
}

//3. *POST /add-one-suggestion
async function addOneSuggestion(feedback_title, category, feedback_detail) {
  await db.query(
    "INSERT INTO suggestions (feedback_title, category, feedback_detail) VALUES ($1, $2, $3)",
    [feedback_title, category, feedback_detail]
  );
}

/*----------------------------------
API Endpoints
----------------------------------*/

//-------------------------------------
//📊 Suggestions
//-------------------------------------

//1. *GET /get-all-suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});

//2. GET /get-suggestions-by-category/:category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  // the line below gets the category from the URL
  const category = req.params.category;

  // the line below calls the helper to fetch suggestions
  const suggestionsByCategory = await getSuggestionsByCategory(category);

  // the line below explains that the next line sends the list of matching suggestions
  // back to the frontend as a JSON object so the client can display or use them
  return res.json({ suggestions: suggestionsByCategory });
});

//3. *POST /add-one-suggestion
app.post("/add-one-suggestion", async (req, res) => {
  const { feedback_title, category, feedback_detail } = req.body;
  await addOneSuggestion(feedback_title, category, feedback_detail);
  res.send(`Success! Your Suggestion was added.`);
});
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
