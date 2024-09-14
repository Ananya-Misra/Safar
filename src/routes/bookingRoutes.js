const express = require('express');
const bookingController = require('../controllers/bookingController');
const router = express.Router();

// Route to get auto-complete suggestions
router.get('/autocomplete', bookingController.getAutoComplete);

// Route to search by locationId
router.get('/search/:locationId', bookingController.searchByLocationId);

module.exports = router;