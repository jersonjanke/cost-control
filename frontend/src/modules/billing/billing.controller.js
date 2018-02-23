function billingCtrl(billingSrv, $state, $stateParams, toastr) {
    const vm = this;
    vm.model = {};
    vm.model.credits = [];
    vm.model.debts = [];
    vm.model.email = "jerson@gmail.com";
    vm.cre = {};
    vm.deb = {};
    vm.status = ["PAYED", "PENDING", "PROGRAMMED"];
    vm.id = $stateParams.id;
    vm.isPositive = false;
    vm.isNegative = false;
    
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
    vm.deleteDebit = deleteDebit;
    vm.sumValue = sumValue;
    vm.getTotal = getTotal;

    function getTotal(credit, debit) {
        let totalCredit = parseFloat(sumValue(credit));
        let totalDebit = parseFloat(sumValue(debit));
        let total = totalCredit - totalDebit; 
        if(total > 0) {
            vm.isPositive = true;
        } else {
            vm.isNegative = true;
        }
        return total.toFixed(2).replace(".",",");
    }

    function sumValue(val) {
        let total = 0;
        val.map(function (cre) {
            total += cre.value;
        });
        return total.toFixed(2).replace(".",",");
    }

    function update(id, model) {
        billingSrv.update(id, model)
            .then(function (response) {
                response.ref = new Date(response.ref);
                vm.model = response;
                toastr.success("Atualizado com sucesso.", "Faturamento");
            })
            .catch(function (error) {
                toastr.error(error, "Faturamento");
            });
    }

    function deleteCredit(index, credit) {
        vm.model.credits.splice(index, 1);
    }

    function deleteDebit(index, debts) {
        vm.model.debts.splice(index, 1);
    }

    function addCredit(credit) {
        vm.model.credits.push(credit);
        vm.cre = {name: "", value: 0};
    }

    function addDeb(debit) {
        vm.model.debts.push(debit);
        vm.deb = {name: "", value: 0};
    }

    function deleteBilling(id) {
        billingSrv.deleteBilling(id)
            .then(function (response) {
                toastr.success("Faturamento deletado", "Faturamento");
            })
            .catch(function (error) {
                toastr.error(error, "Faturamento");
            })
            .finally(function () {
                $state.go("billing-list");
            });
    }

    function createBilling(model) {
        billingSrv.createBilling(model)
            .then(function (response) {
                toastr.success("Criado com sucesso.", "Faturamento");
            })
            .catch(function (error) {
                toastr.error(error, "Faturamento");
            })
            .finally(function() {
                $state.go("billing-list");
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