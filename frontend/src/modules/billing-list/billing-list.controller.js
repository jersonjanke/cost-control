function billingListCtrl(billingListSrv) {
    const vm = this;
    vm.getBillingByEmail = getBillingByEmail;
    vm.getAllBilling = getAllBilling;

    getAllBilling();

    function getBillingByEmail(email) {
        billingListSrv.getBillingByEmail(email)
            .then(function (response) {
                console.log(response);
                vm.model = response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    function getAllBilling() {
        billingListSrv.getAllBilling()
            .then(function (response) {
                console.log(response);
                vm.model = response;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export default billingListCtrl;