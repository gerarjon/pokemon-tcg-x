const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();

// bodyParser, parses the requst body to be a readable json format
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});