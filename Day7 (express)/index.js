const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(
        "dis is awesome"
    )
})

app.listen(5000);