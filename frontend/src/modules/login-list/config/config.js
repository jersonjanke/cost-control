import angular from 'angular';
import routes from '../config/routes';
import loginListCtrl from '../login-list.controller';
import loginListSrv from '../login-list.service';

const exports = {name: 'login-list'};

angular.module(exports.name, [])
.controller('loginListCtrl', loginListCtrl)
.service('loginListSrv', loginListSrv)
.config(routes);

export default exports;