console.log('Express started');
import express from "express";

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).json('Server worked')
})

app.listen(PORT, () => console.log('SERVER STARTED IN PORT' + PORT));