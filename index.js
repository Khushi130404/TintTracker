const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Create Palette
app.post("/palette", async (req, res) => {
  try {
    const { palette } = req.body;
    const newPalette = await pool.query(
      "INSERT INTO palettes (palette) VALUES ($1)",
      [palette]
    );
    res.json(newPalette);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...!");
});
