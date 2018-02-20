function loginCtrl(loginSrv) {
    const vm = this;
    vm.getUsers = getUsers;
    vm.createNewUser = createNewUser;
    vm.deleteUser = deleteUser;
    vm.updateUser = updateUser;

    getUsers();

    function getUsers() {
        loginSrv.getAllUsers().then(function(data) {
            vm.model = data;
        });
    }

    function deleteUser(id) {
        loginSrv.deleteUser(id).then(function(data) {
            console.log(data);
        }).catch(function(error) {
            console.error(error);
        }).finally(function() {
            getUsers();
        });
    }

    function createNewUser(model) {
        loginSrv.createNewUserSrv(model).then(function(data) {
            console.log(data);
        }).finally(function(){
            getUsers();
        });
    }

    function updateUser(model) {
        loginSrv.updateUserSrv(model).then(function(data) {
            console.log(data);
        }).catch(function(error) {
            console.error(error);
        }).finally(function(){
            getUsers();
        });
    }
}

export default loginCtrl;