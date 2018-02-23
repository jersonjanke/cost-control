function billingListCtrl(billingListSrv, toastr) {
    const vm = this;
    vm.getBillingByEmail = getBillingByEmail;
    vm.getAllBilling = getAllBilling;
    vm.convertDate = convertDate;

    //getAllBilling();
    getBillingByEmail("jersonjanke@gmail.com");

    function convertDate(date) {
        let ref = new Date(date);
        return ref;
    }

    function getBillingByEmail(email) {
        billingListSrv.getBillingByEmail(email)
            .then(function (response) {
                convertDate(response);
                vm.model = response;
            })
            .catch(function (error) {
                toastr.error(error);
                console.error(error);
            });
    }

    /**
     * Converte data
     */
    function convertDate(response) {
        return response.forEach(item => {
            item.ref = new Date(item.ref);
        });
    }

    function getAllBilling() {
        billingListSrv.getAllBilling()
            .then(function (response) {
                convertDate(response);
                vm.model = response;
            })
            .catch(function (error) {
                toastr.error(error);
                console.error(error);
            });
    }
}

export default billingListCtrl;