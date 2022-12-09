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




module.exports = router