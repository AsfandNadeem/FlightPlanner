const mongoose = require('mongoose');
const City = require("../models/cities");
const Flight = require("../models/flight");
const FlightPlan = require('../models/flightPlan');
const Graph = require('node-dijkstra');


const route = new Graph();


module.exports.FindShortestPath = function (a,b) {
    City.findOne({_id: a}, (err, doc) => {
        if(doc) {
            Flight.findOne({ $and:[ {'originid': a}, {'destinationid':b} ]}, (err, doc) => {
                if(doc) {
                    const flightplan = new FlightPlan({
                        originid: a,
                        destinationid: b,
                        numberofStops: 1,
                        cost: doc.cost
                    });
                }
                else if(doc == null) {
                    Flight.find({ 'originid': a}, (err, doc) => {
                        if(doc) {
                            doc.forEach(function(m) {

                            });
                            route.addNode(a, { B:1 });
                        }
                        else if(doc == null) {
                            res.json({ success: false, message:'No path exist'});
                        }
                    });
                }
            });

        }
        else if(doc == null) {
            res.json({ success: false, message:'origin doesn\'t exist'});
        }
    });
}