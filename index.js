const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// Create Palette
app.post("/palette/insert", async (req, res) => {
  try {
    const { name, color1, color2, color3, color4 } = req.body;
    console.log(req.body);
    const newPalette = await pool.query(
      "INSERT INTO palettes (name,color1,color2,color3,color4) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, color1, color2, color3, color4]
    );
    res.json(newPalette.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all Palettes
app.get("/palette/show", async (req, res) => {
  try {
    const allPalettes = await pool.query("SELECT * FROM palettes");
    res.json(allPalettes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a Palette
app.get("/palette/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const palette = await pool.query(
      "SELECT * FROM palettes WHERE palette_id = $1",
      [id]
    );
    res.json(palette.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a Palette
app.put("/palette/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color1, color2, color3, color4 } = req.body;
    const updatePalette = await pool.query(
      "UPDATE palettes SET name = $1, color1 = $2, color2 = $3, color3 = $4, color4 = $5 WHERE palette_id = $6",
      [name, color1, color2, color3, color4, id]
    );
    res.json("Palette was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...!");
});
