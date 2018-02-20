function billingCtrl(billingSrv) {
    const vm = this;
    vm.createBilling = createBilling;

    function createBilling(model) {
        billingSrv.createBilling(model)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            })
    }

}

export default billingCtrl;