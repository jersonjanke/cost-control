function loginSrv($http, $q) {

    const URL = "http://localhost:3000/users";
    var service = {};
    service.createNewUserSrv = createNewUserSrv;
    service.getAllUsers = getAllUsers;
    service.deleteUser = deleteUser;
    service.updateUserSrv = updateUserSrv;

    return service;

    /**
     * Cria novo usuário
     * 
     * @param {Object} model 
     */
    function createNewUserSrv(model) {
        return $http.post(URL, model)
        .then(getSuccess)
        .catch(getError);

        function getSuccess(response) {
            return response.data;
        }

        function getError(error) {
            return error;
        }
    }

    /**
     * Retorna todos usuários da base
     */
    function getAllUsers() {
        return $http.get(URL)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error
        });
    }

    /**
     * Delete usuário
     * @param {string} userId 
     */
    function deleteUser(userId) {
        return $http.delete(URL + "/" + userId)
        .then(function(response){
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
    }

    /**
     * Atualiza usuário
     */
    function updateUserSrv(model) {
        return $http.put(URL + "/" + model._id, model)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return error;
        })
    }
}

export default loginSrv;