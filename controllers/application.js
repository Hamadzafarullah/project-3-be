const express = require('express');
const router = express.Router();

const Travelapp = require('../models/Travelapp')


// Get all locations in the page
router.get('/', async (req, res) => {
    try {
      res.status(200).json(await Travelapp.find({}))
      console.log(Travelapp)
    } catch (err) {
          next(err);
    }

});

router.get("/:id", async (req, res) => {
  try {

      res.json(await Travelapp.findById(req.params.id));
    } catch (error) {

      res.status(400).json(error);
    }
});


module.exports = router