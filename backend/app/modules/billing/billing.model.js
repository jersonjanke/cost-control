var mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name:{type: String, required: [true, 'Informe o valor do débito!']},
    value:{type: Number, min: 0, required: true},
    status:{type: String, required: false, uppercase: true,
        enum: ['PAYED', 'PENDING', 'PROGRAMMED']}
})

var BillingSchema = mongoose.Schema({
    ref: {type: Date, required: true},
    //month: {type: Number, min: 1, max: 12, required: true},
    //year:{type: Number, min:1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema],
    file: String
    //email: {type: String, required: true}
});

module.exports = mongoose.model("Billing", BillingSchema);