var Billing = require("../billing/billing.model");

exports.create = function (req, res) {
    var billing = new Billing({
        ref: req.body.ref,
        month: req.body.month,
        year: req.body.year,
        credits: req.body.credits,
        debts: req.body.debts,
        email: req.body.email,
        total: req.body.total
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

exports.update = function(req, res) {
    Billing.findById(req.params.billingId, function(err, billing) {
        if(err) {
            res.status(500).send({message: "Could not find a billing with id" + req.params.billingId});
        }

        billing.ref = req.body.ref,
        billing.month = req.body.month,
        billing.year = req.body.year,
        billing.credits = req.body.credits,
        billing.debts = req.body.debts,
        billing.email = req.body.email,
        billing.total = req.body.total

        billing.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Could not update billing." + data});
            } else {
                res.send(data);
            }
        })
    });
}

exports.findOne = function(req, res) {
    Billing.findById(req.params.billingId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not"})
        } else {
            res.send(data);
        }
    });
}

exports.delete = function(req, res) {
    Billing.remove({_id: req.params.billingId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "erro while deleting billing"})
        } else {
            res.send({message: "Billing deleted successfuly!"});
        }
    });
}