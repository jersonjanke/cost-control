var mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: Date,
    type: String,
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name:{type: String, required: [true, 'Informe o valor do débito!']},
    date: Date,
    value:{type: Number, min: 0, required: true},
    type: String,
    status:{type: String, uppercase: true,
        enum: ['PAY', 'PENDING']}
})

const totais = new mongoose.Schema({
    credit: Number,
    debit: Number,
    general: Number
});

var BillingSchema = mongoose.Schema({
    ref: {type: Date, required: true},
    credits: [creditSchema],
    debts: [debtSchema],
    file: String,
    
    email: {type: String, required: true},
    total: [totais]
});

module.exports = mongoose.model("Billing", BillingSchema);