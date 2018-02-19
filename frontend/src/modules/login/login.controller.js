function loginCtrl($http) {
    const vm = this;
    vm.$http = $http;

    vm.user = {
        name: "Jerson Janke TESTE",
        email: "jersonjanke@gmail.com",
        password: "123",
    }

    getListUser();

    function getListUser() {
        vm.$http.get("http://localhost:3000/users").then(function(model) {
            console.log(model.data);
        }).catch(function(error) {
            console.log(error);
        });
    }

    function createNewUser() {
        vm.$http.post("http://localhost:3000/users",  vm.user).then(function(data) {
            console.log(data);
        }).catch(function(error) {
            console.log(error);
        });
    }
}

export default loginCtrl;