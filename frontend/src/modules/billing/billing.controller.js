function billingCtrl(billingSrv) {
    const vm = this;
    vm.getAllBilling = getAllBilling;
    vm.getBillingByEmail = getBillingByEmail;
    vm.createBilling = createBilling;

    // let data = {
    //     name: "Jerson",
    //     month: 12,
    //     year: 2018,
    //     email: "jerson@gmail.com",
    //     credits: [{ "name": "Salaraio", "value": 4000 }],
    //     debts: [{ "name": "Aluguel", "value": 730, "status": "PAYED" }]
    // }

    //createBilling(data);

    function createBilling(model) {
        billingSrv.createBilling(model)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            })
    }

    function getBillingByEmail(email) {
        billingSrv.getBillingByEmail(email)
            .then(function (response) {
                console.log(response);
                vm.model = response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    function getAllBilling() {
        billingSrv.getAllBilling()
            .then(function (response) {
                console.log(response);
                vm.model = response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}

export default billingCtrl;