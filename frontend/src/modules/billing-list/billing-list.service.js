function billingListSrv($http, $q) {

    const URL = "http://localhost:3000/";
    var service = {};
    service.getAllBilling = getAllBilling;
    service.getBillingByEmail = getBillingByEmail;
    
    return service;

    function getAllBilling() {
        return $http.get(URL + "billing")
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
    }

    function getBillingByEmail(email) {
        return $http.get(URL + "billing-by-email/" + email)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
    }
}

export default billingListSrv;