import angular from 'angular';
import routes from '../config/routes';
import userCtrl from '../user.controller';
import userSrv from '../user.service';

const exports = {name: 'user'};

angular.module(exports.name, [])
.controller('userCtrl', userCtrl)
.service('userSrv', userSrv)
.config(routes);

export default exports;