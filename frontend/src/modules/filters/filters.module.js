import angular from 'angular';
import uppercase from './uppercase';
import numberFormat from './numberFormat';

const exports = {name: 'filters'};

angular.module(exports.name, [])
.filter('uppercase', uppercase)
.filter('numberFormat', numberFormat);

export default exports;