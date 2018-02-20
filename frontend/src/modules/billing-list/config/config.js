import angular from 'angular';
import routes from '../config/routes';
import billingListCtrl from '../billing-list.controller';
import billingListSrv from '../billing-list.service';

const exports = {name: 'billing-list'};

angular.module(exports.name, [])
.controller('billingListCtrl', billingListCtrl)
.service('billingListSrv', billingListSrv)
.config(routes);

export default exports;