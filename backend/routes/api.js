const express = require("express");
const router = express.Router();
const Trail = require("../models/trail");

router.get("/trails", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Trail.find({}, "name date")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/trails", (req, res, next) => {
  if (req.body.name && req.body.date) {
    Trail.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/trails/:id", (req, res, next) => {
  Trail.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
