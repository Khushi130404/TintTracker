const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Create Palette
app.post("/insert_palette", async (req, res) => {
  try {
    const { name, color1, color2, color3, color4 } = req.body;
    console.log(req.body);
    const newPalette = await pool.query(
      "INSERT INTO palettes (name,color1,color2,color3,color4) VALUES ($1,$2,$3,$4,$5)",
      [name, color1, color2, color3, color4]
    );
    res.json(newPalette);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...!");
});
