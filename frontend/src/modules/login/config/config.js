import angular from 'angular';
import routes from '../config/routes';
import loginCtrl from '../login.controller';
import loginSrv from '../login.service';

const exports = {name: 'login'};

angular.module(exports.name, [])
.controller('loginCtrl', loginCtrl)
.service('loginSrv', loginSrv)
.config(routes);

export default exports;