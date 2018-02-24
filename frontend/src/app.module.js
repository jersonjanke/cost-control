import angular from 'angular';
import animate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import user from './modules/user/config/config';
import billing from './modules/billing/config/config';
import billingList from './modules/billing-list/config/config';
import login from './modules/login/config/config';
import toastr from 'angular-toastr';
import './assets/scss/app.scss';

const app = angular.module('app', [
    animate,
    toastr,
    uiRouter,
    login.name,
    user.name,
    billing.name,
    billingList.name
]);

app.controller('appCtrl', function($scope, $state) {
    $state.go('login');
});