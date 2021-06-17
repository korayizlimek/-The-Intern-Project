require("dotenv").config();

const signalsData = require("./data/Signals");
const connectDB = require("./config/db");
const Signal = require("./models/Signal");

connectDB();

const importData = async () => {
    try {
        await Signal.deleteMany({});

        await Signal.insertMany(signalsData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.log(error);
        console.log("Error with data import");
        process.exit(1);
    }
};

importData();
