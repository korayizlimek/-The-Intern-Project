const mongoose = require("mongoose");

const signalSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    data: {
        type: Number,
        required: true,
    },
});

signalSchema.methods.toJSON = function () {
    const signal = this.toObject();
    delete signal._id;
    delete signal.createdAt;
    delete signal.updatedAt;
    delete signal.__v;
    // delete user.sifre;

    return signal;
};

const Signal = mongoose.model("signal", signalSchema);

module.exports = Signal;
