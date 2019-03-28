// Enable Strict Mode
//========================================================================
("use strict");
//========================================================================

// Require Dependencies
//========================================================================
const express = require("express");
const routes = require("./routes");
//========================================================================

// Instantiate Express App
//========================================================================
const app = express();
//========================================================================

// Configure Port For Local/Heroku
//========================================================================
const PORT = process.env.PORT || process.argv[2] || 8080;
//========================================================================

// Middleware
//========================================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//========================================================================

// Express Connection
//========================================================================
app.listen(PORT, function() {
  console.log(
    `🌎  ==> API Server now listening on port ${PORT} at localhost:${PORT}`
  );
});
//========================================================================
