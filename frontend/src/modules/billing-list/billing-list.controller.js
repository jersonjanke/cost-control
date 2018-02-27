function billingListCtrl(billingListSrv, toastr) {
    const vm = this;
    vm.getBillingByEmail = getBillingByEmail;
    vm.getAllBilling = getAllBilling;
    vm.currentIndex = 0;
    vm.next = next;
    vm.previous = previous;
    const moment = require("moment");

    getBillingByEmail(localStorage.getItem("email"));

    function next() {
        if((++vm.currentIndex) < vm.model.length) {
            vm.current = vm.model[vm.currentIndex];
        }
    }

    function previous() {
        if((--vm.currentIndex) > -1) {
            vm.current = vm.model[vm.currentIndex];
        }
    }

    function getBillingByEmail(email) {
        billingListSrv.getBillingByEmail(email)
            .then(function (response) {
                convertDate(response);
                vm.model = response;
                vm.current = vm.model[vm.currentIndex];
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
            item.refDesc = moment(item.ref).format('MMM').toUpperCase();
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
