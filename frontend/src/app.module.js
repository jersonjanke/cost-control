import angular from 'angular';
import animate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import login from './modules/login/config/config';
import billing from './modules/billing/config/config';
import toastr from 'angular-toastr';
import './assets/scss/app.scss';

const app = angular.module('app', [
    animate,
    toastr,
    uiRouter,
    login.name,
    billing.name
]);

app.controller('appCtrl', function($scope, $state) {
    //$state.go('login');
});