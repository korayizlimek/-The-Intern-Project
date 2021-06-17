const express = require("express");
const router = express.Router();

const {
    getAllSignals,
    getSignalById,
    addSignal,
} = require("../controller/signalsController");

//@desc GET all signals from db
//@route GET /api/signals
//@access Public
router.get("/", getAllSignals);

//@desc GET a signal by id from db
//@route GET /api/signals/:id
//@access Public
router.get("/:id", getSignalById);

//@desc POST a singals
//@route GET /api/signals
//@access Public
router.post("/", addSignal);

module.exports = router;
