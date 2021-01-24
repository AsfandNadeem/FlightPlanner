const City = require("../models/cities");
const Flight = require("../models/flight");

module.exports.Login =
    (req, res, next) => {
    console.log(req.body);
        if(req.body.userName == "asfand123") {

            if(req.body.password == "starwars") {

                res.status(200).json({
                    message: "admin logged"
                });

            } else {
                return res.status(401).json({
                    messzage: "admin failed"
                });
            }

        } else {
            return res.status(401).json({
                message: "admin failed"
            });
        }
    }




module.exports.createCity =
    (req, res, next) => {
    console.log(req.body.name + ' ' + req.body.country);
        City.findOne({name: req.body.name}, (err, doc) => {
                if(doc) {
                    return res.status(401).json({
                        message: "city already exists"
                    });
                }
                else if(doc == null) {
                    const city = new City({
                        name: req.body.name,
                        country: req.body.country
                    });
                    city.save((err) => {
                        if(err) {
                            res.json({ success: false, message:'something went wrong'});
                        } else {
                            res.json({ success: true, message: 'city added'});
                        }
                    });
                }
        });

    }


module.exports.getOrigin = (req, res, next) =>{
    const cityQuery = City.find().sort({'name': 1});
    let fetchedCitites;

    cityQuery
        .then(documents => {
            fetchedCitites = documents;
            return fetchedCitites.length;
        })
        .then(count => {
                    res.status(200).json({
                        message: "Cities fetched successfully!",
                        cities: fetchedCitites,
                        maxCities: count
                    });
        });
}

module.exports.getDestinations = (req, res, next) =>{
    const cityQuery = City.find({_id:{$ne:req.params.id} }).sort({'name': 1});
    let fetchedCitites;

    cityQuery
        .then(documents => {
            fetchedCitites = documents;
            return fetchedCitites.length;
        })
        .then(count => {
            res.status(200).json({
                message: "Cities fetched successfully!",
                cities: fetchedCitites,
                maxCities: count
            });
        });
}


module.exports.createFlight =
    (req, res, next) => {
        Flight.findOne({ $and:[ {'originid': req.body.origin}, {'destinationid':req.body.destination} ]}, (err, doc) => {
            if(doc) {
                const flight =({
                    _id: doc._id,
                    originid: req.body.origin,
                    destinationid: req.body.destination,
                    cost: req.body.cost
                });
                return res.json({ success: true, message: 'Flight Updated'});
            }
            else if(doc == null) {

                const flight = new Flight({
                    originid: req.body.origin,
                    destinationid: req.body.destination,
                    cost: req.body.cost
                });

                flight.save((err) => {
                    if(err) {
                        res.json({ success: false, message:'something went wrong'});
                    } else {
                        res.json({ success: true, message: 'flight added'});
                    }
                });
            }
        });

    }



