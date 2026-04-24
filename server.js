const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files
app.use(express.static(__dirname));

// Open emulator.html by default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "emulator.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
