import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import login from './modules/login/config/config';
import './assets/scss/app.scss';

const app = angular.module('app', [
    uiRouter,
    login.name
]);

app.controller('appCtrl', function($scope, $state) {
    $state.go('login');
});