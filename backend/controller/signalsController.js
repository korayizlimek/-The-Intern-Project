const Signals = require("../models/Signal");

const getAllSignals = async (req, res) => {
    try {
        const signals = await Signals.find({});
        res.json(signals);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getSignalById = async (req, res) => {
    try {
        const signal = await Signals.findById(req.params.id);
        res.json(signal);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const addSignal = async (req, res) => {
    try {
        console.log(req.body);
        const signal = new Signals(req.body);

        const result = await signal.save();
        res.json(result);

        // console.log(req.body);
        // res.json(signal);
    } catch (error) {
        console.log("Sinyal kaydederken hata:" + error);
    }
};

module.exports = {
    getAllSignals,
    getSignalById,
    addSignal,
};
