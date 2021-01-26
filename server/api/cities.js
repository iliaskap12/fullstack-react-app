let express = require('express');
let Cities = require('../models/cities');

let router = express.Router();

router.get('/', function(req, res) {
    Cities.retrieveAll(function(err, cities) {
       if(err) return res.json(err);
       return res.json(cities);
    });
});

router.post('/', function(req, res) {
   let city = req.body.city;

   Cities.insert(city, function(err, result) {
       if(err) return res.json(err);
       return res.json(result);
   });
});

module.exports = router;