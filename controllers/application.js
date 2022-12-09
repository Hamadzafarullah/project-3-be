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
// // Get all attraction
// router.get('/attraction/atrraction:', async (req, res, next) => {
//     try {
//       const travelapp = await travelapp.find({make: req.params.attraction})
//       res.json(travelapp);
//     } catch (err) {
//           next(err);
//     }
// });

// // Get all information
// router.get('/information/:information', async (req, res, next) => {
//     try {
//       const travelapp = await travelapp.find({model: req.params.information})
//       res.json(travelapp);
//     } catch (err) {
//           next(err);
//     }
// });

// // Get all cost
// router.get('/cost/:cost', async (req, res, next) => {
//     try {
//       const travelapp = await travelapp.find({cost: { $gte: req.params.cost}})
//       res.json(travelapp);
//     } catch (err) {
//           next(err);
//     }
// });

// // Get all image
// router.get('/image/image', async (req, res, next) => {
//     try {
//       const travelapp = await travelapp.find({model: req.params.image})
//       res.json(travelapp.image);
//     } catch (err) {
//           next(err);
//     }
// });


module.exports = router