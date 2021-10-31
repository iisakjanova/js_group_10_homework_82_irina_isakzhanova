const express = require('express');
const Track = require("../models/Track");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = {};

        if(req.query.album) {
            query.album = req.query.album;
        }

        const tracks = await Track.find(query).populate('album', 'title');
        res.send(tracks);
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;