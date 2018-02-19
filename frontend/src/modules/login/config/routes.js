import loginHtml from './../login.html';
import loginCtrl from './../login.controller';

function routes($stateProvider) {
    const login = {
        name: 'login',
        url: '/login',
        template: loginHtml,
        controller: loginCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(login);
}

export default routes;