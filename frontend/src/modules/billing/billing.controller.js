function billingCtrl(billingSrv, $state, $stateParams) {
    const vm = this;
    vm.model = {};
    vm.model.credits = [];
    vm.model.debts = [];
    vm.cre = {};
    vm.deb = {};
    vm.status = ["PAYED", "PENDING", "PROGRAMMED"];
    /**
     * Métodos
     */
    vm.createBilling = createBilling;
    vm.update = update;
    vm.getBillingDetail = getBillingDetail;
    vm.deleteBilling = deleteBilling;
    vm.addCredit = addCredit;
    vm.addDeb = addDeb;
    vm.deleteCredit = deleteCredit;

    function update(id, model) {
        billingSrv.update(id, model)
        .then(function(response) {
            response.ref = new Date(response.ref);
            vm.model = response;
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function deleteCredit(index, credit) {
        console.log(vm.model.credits[index]);
        vm.model.credits.splice(index, 1);
    }

    function addCredit(credit) {
        vm.model.credits.push(credit);
        vm.cre = {};
    }

    function addDeb(debit) {
        vm.model.debts.push(debit);
        vm.deb = {};
    }

    function deleteBilling(id) {
        billingSrv.deleteBilling(id)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            })
            .finally(function(){
                $state.go("billing-list");
            });
    }

    function createBilling(model) {
        console.log(model);
        billingSrv.createBilling(model)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    function getBillingDetail(id) {
        billingSrv.getBillingByID(id)
            .then(function (response) {
                response.ref = new Date(response.ref);
                vm.model = response;
            })
            .catch(function (error) {
                console.error(error)
            });
    }

    init();

    function init() {
        if ($stateParams.id) {
            getBillingDetail($stateParams.id);
        }
    }

}

export default billingCtrl;