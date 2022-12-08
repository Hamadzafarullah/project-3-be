const express = require('express')
const Location = require('../models/Location')
const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
        const locations = await Location.find({})
        res.json(locations)
    } catch (err) {
        next(err)
    }
})


router.get('/:name', async (req, res, next) => {
    try {
        const location = await Location.findOne({ name: { '$regex': req.params.name, $options: 'i' } })
        res.json(location)
    } catch (err) {
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const newLocation = await Location.create(req.body)
        res.status(201).json(newLocation)
    } catch (err) {
        next(err)
    }

})


router.put('/:name', async (req, res, next) => {
    try {
        const updatedLocation = await Location.findOneAndUpdate(
            { name: { '$regex': req.params.name, $options: 'i' } },
            { $set: req.body },
            { new: true }
        )
        if(updatedLocation) {
            res.json(updatedLocation)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})


router.delete('/delete/:name', async (req, res, next) => {
    try {
        const deleteLocation = await Location.deleteOne({ name: { '$regex': req.params.name, $options: 'i' } })
        if (deleteLocation) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})
module.exports = router