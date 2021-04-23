const express = require('express');
let router = express.Router();
const ActivitiesController = require("../controllers/ActivitiesController");

router.post("/add-activity", ActivitiesController.addActivity);

router.get("/view-view activity", ActivitiesController.getAllActivity);


module.exports = router;