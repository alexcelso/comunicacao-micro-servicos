import express from "express";

import * as db from "./src/config/db/initialData.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

db.createInitialData();

app.get("/api/status", (req, res) => {
    res.status(200).json({
        service: "Auth-API",   
        status: "up", 
        httpStatus: 200 });
})  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
