require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const signalsRoutes = require("./routers/signalsRoutes");
var cors = require("cors"); //! express js access-control-allow-origin

connectDB();

const app = express();
app.use(express.json());

app.use(cors()); //! express js access-control-allow-origin

app.get("/hello", (req, res) => {
    // res.status(200).json({ success: true });
    res.send("Hello");
});

app.use("/api/signals", signalsRoutes);

// const corsOpts = {
//     origin: "*",

//     methods: ["GET", "POST"],

//     allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOpts));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
