const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend Running 🚀 - BLUE ENV (Kubernetes Ready)");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        service: "backend",
        env: "blue"
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});