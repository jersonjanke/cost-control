import userHtml from './../index.html';
import userCtrl from './../user.controller';

function routes($stateProvider) {
    const user = {
        name: 'user',
        url: '/user',
        template: userHtml,
        controller: userCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(user);
}

export default routes;