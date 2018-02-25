function loginCtrl(loginSrv, $state, toastr) {
    const vm = this;
    vm.getLogin = getLogin;
    vm.isLoading = false;

    function getLogin(model) {
        vm.isLoading = true;
        loginSrv.login(model)
        .then(function(response) {
            if(response.login) {
                localStorage.setItem("email", model.email);
                $state.go("billing-list");
            } else {
                toastr.error("Email ou senha invalidos");
            }
        })
        .catch(function(error) {
            console.error(error);
        });
        
        vm.isLoading = false;
    }
}

export default loginCtrl;
