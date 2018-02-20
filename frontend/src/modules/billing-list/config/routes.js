import billingListHtml from './../index.html';
import billingListCtrl from './../billing-list.controller';

function routes($stateProvider) {
    const routes = {
        name:'billing-list',
        url: '/billing-list',
        template: billingListHtml,
        controller: billingListCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(routes);
}

export default routes;