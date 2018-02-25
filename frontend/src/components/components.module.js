import angular from 'angular';
import navBar from './navBar/navBar.directive';

const exports = {name: 'components'};

angular.module(exports.name, [])
.directive('navBar', navBar);

export default exports;