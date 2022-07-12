const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.listen(3005, () => {
    console.log("Server is listening on port 3005");
})

app.get('/api/data', (req, res) => {
    fs.readFile('./data/trips.json', 'utf8', (err, data) => {
        if(err) {
            throw err;
        }

        res.send(JSON.parse(data));
    })
})