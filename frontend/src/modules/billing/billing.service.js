function billingSrv($http, $q) {

    const URL = "http://localhost:3000/";
    var service = {};
    service.createBilling = createBilling;
    service.getBillingByID = getBillingByID;
    service.deleteBilling = deleteBilling;
    service.update = update;

    return service;

    function update(id, model) {
        return $http.put(URL + "billing/" + id, model)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error
        });
    }

    function createBilling(model) {
        return $http.post(URL + "billing", model)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error
        });
    }
    
    function getBillingByID(id) {
        return $http.get(URL + "billing/" + id)
        .then(function(response){
            return response.data;
        })
        .catch(function(error){
            return error
        });
    }

    function deleteBilling(id) {
        return $http.delete(URL + "billing/" + id)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
    }
}

export default billingSrv;