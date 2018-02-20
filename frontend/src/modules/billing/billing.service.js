function billingSrv($http, $q) {

    const URL = "http://localhost:3000/";
    var service = {};
    service.createBilling = createBilling;

    return service;

    function createBilling(model) {
        return $http.post(URL + "billing", model)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error
        });
    }
}

export default billingSrv;