import loginListHtml from './../login-list.html';
import loginListCtrl from './../login-list.controller';

function routes($stateProvider) {
    const loginList = {
        name: 'login-list',
        url: 'login-list',
        template: loginListHtml,
        controller: loginListCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(loginList);
}

export default routes;