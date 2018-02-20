function userCtrl(userSrv, toastr) {
    const vm = this;
    vm.getUsers = getUsers;
    vm.createNewUser = createNewUser;
    vm.deleteUser = deleteUser;
    vm.updateUser = updateUser;

    getUsers();

    function getUsers() {
        userSrv.getAllUsers().then(function(data) {
            vm.model = data;
        });
    }

    function deleteUser(id) {
        userSrv.deleteUser(id).then(function(data) {
            console.log(data);
            toastr.success('Usuário deletado com sucesso!', 'Usuário');
        }).catch(function(error) {
            console.error(error);
        }).finally(function() {
            getUsers();
        });
    }

    function createNewUser(model) {
        userSrv.createNewUserSrv(model).then(function(data) {
            console.log(data);
            toastr.success('Usuário criado com sucesso!', 'Usuário');
        }).finally(function(){
            getUsers();
        });
    }

    function updateUser(model) {
        userSrv.updateUserSrv(model).then(function(data) {
            console.log(data);
            toastr.success('Usuário atualizado com sucesso!', 'Usuário');
        }).catch(function(error) {
            console.error(error);
        }).finally(function(){
            getUsers();
        });
    }
}

export default userCtrl;