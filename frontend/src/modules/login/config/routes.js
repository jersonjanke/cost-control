import html from './../index.html';
import loginCtrl from './../login.controller';

function routes($stateProvider) {
    const login = {
        name: 'login',
        url: '/login',
        template: html,
        controller: loginCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(login);
}

export default routes;