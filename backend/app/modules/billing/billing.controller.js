var Billing = require("../billing/billing.model");

exports.create = function (req, res) {
    var billing = new Billing({
        name: req.body.name,
        month: req.body.month,
        year: req.body.year,
        credits: req.body.credits,
        debts: req.body.debts,
        email: req.body.email
    });

    billing.save(function (err, data) {
        if (err) {
            res.status(500).send({ message: "Some error ocuured while creating" })
        } else {
            res.send(data);
        }
    });
}

exports.findAll = function(req, res) {
    Billing.find(function(err, billings) {
        if(err) {
            res.status(500).send({message: "Some erro ocuured while findAll"})
        } else {
            res.send(billings);
        }
    });
}

exports.findByEmail = function(req, res) {
    Billing.find({email: req.params.userEmail }, function(err, data) {
        if(err) {
            res.status(500).send({message: "Not found!"});
        } else {
            res.send(data);
        }
    });
}