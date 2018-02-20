import angular from 'angular';
import routes from '../config/routes';
import billingCtrl from '../billing.controller';
import billingSrv from '../billing.service';

const exports = {name: 'billing'};

angular.module(exports.name, [])
.controller('billingCtrl', billingCtrl)
.service('billingSrv', billingSrv)
.config(routes);

export default exports;