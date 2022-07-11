const express = require("express");
const app = express();
const dataTrips = require("./data/trips.json");
const cors = require("cors");

app.use(cors());

app.listen(3005, () => {
    console.log("Server is listening on port 3005");
})

app.get("/api/data", (req, res) => {
    res.json(dataTrips);
})