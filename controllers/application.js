const express = require('express');
const router = express.Router();

const Travelapp = require('../models/Travelapp')


//home route
router.get('/', async (req, res) => {
    try {
      res.status(200).json(await Travelapp.find({}))
      console.log(Travelapp)
    } catch (err) {
          next(err);
    }

});
//create route
router.post("/", async (req, res) => {
  try {

    res.json(await Travelapp.create(req.body));
  } catch (error) {
    //send error

    res.status(400).json(error);
  }
});
//locationID route
router.get("/:id", async (req, res) => {
  try {

      res.json(await Travelapp.findById(req.params.id));
    } catch (error) {

      res.status(400).json(error);
    }
});
// Location UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // update location by ID
    res.json(
      await Travelapp.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Location DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // delete location by ID
    res.json(await Travelapp.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


module.exports = router