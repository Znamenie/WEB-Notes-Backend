import express from "express";
import mongoose from "mongoose";
import routerAdditional from "./app_api/routes/additional.js";
import routerHelpful from "./app_api/routes/helpful.js";
import 'dotenv/config'

const PORT = 5000;
const DB_URL = process.env.DB_CONNECTION;
const app = express();

// MODULES
app.use(express.json());
app.use(express.static('static'));
app.use('/api/v0/additional', routerAdditional);
app.use('/api/v0/helpful', routerHelpful);

// ROUTES
app.get('/', (req, res) => {
    res.status(200).json('Server working')
})

// Connect To DB
async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('SERVER STARTED IN PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
};

// Start to the Connect
startApp();
