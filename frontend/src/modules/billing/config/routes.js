import billingHtml from './../index.html';
import billingCtrl from './../billing.controller';

function routes($stateProvider) {
    const billing = {
        name: 'billing',
        url: '/billing',
        template: billingHtml,
        controller: billingCtrl,
        controllerAs: 'vm'
    };

    const billingDetail = {
        name: 'billing-detail',
        url: '/billing-detail/{id}',
        template: billingHtml,
        controller: billingCtrl,
        controllerAs: 'vm'
    }

    $stateProvider.state(billing);
    $stateProvider.state(billingDetail);
}

export default routes;