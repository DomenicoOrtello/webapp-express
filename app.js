const express = require('express')
const app = express()
const cors = require("cors")
const { PORT, FE_URL} = process.env

// Middleware dei file statici
app.use(express.static("public"));

// Middleware CORS
app.use(
    cors({
      origin: FE_URL,
    })
  );
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})