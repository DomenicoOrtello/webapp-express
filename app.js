require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require ("./routers/movieRouters")
const errorsHandler = require("./middleware/errorsHandler");
const notFound = require ("./middleware/notFound")
const { PORT, FE_URL } = process.env;
require('dotenv').config();

// Middleware dei file statici
app.use(express.static("public"));

// Middleware del parsing del req.body
app.use(express.json());

// Middleware CORS
app.use(
  cors({
    origin: FE_URL,
  })
);

// Rotte dell'app
app.use("/movie", movieRouter)

// Middlewares per la gestione degli errori 404 e 500
app.use(errorsHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});