import express from "express";

const app = express();
const env = process.env;

const PORT = env.PORT || 8082;

app.get("/api/status", (req, res) => {
    res.status(200).json({
        service: "Sales-API",   
        status: "up", 
        httpStatus: 200 
    })
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});