function loginSrv($http, $q) {
    const URL = "http://localhost:3000/";
    const service = {};
    service.login = login;

    return service;

    function login(model) {
        return $http.post(URL + "users-login", model)
        .then(function(response) {
            return response.data;
        })  
        .catch(function(error) {
            return error;
        });  
    }
}

export default loginSrv;