;(function(){
'use strict';
angular
  .module('moviesApp', [

  'ngSanitize',
  'restangular',
  'ui.router'

  ])
  .constant('serverBaseUrl', 'http://localhost:9000')
  .constant('serverUrl', 'http://localhost:9000/api/')
  .config( appConfig );

  appConfig.$inject = [
    'RestangularProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'];
  function appConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .when('', '/movies')
      .otherwise('/');

    RestangularProvider.setBaseUrl('http://localhost:9000/api/');
    RestangularProvider.setRestangularFields({
      id: '_id',
      route: 'restangularRoute',
      selfLink: 'self.href'
    });

    RestangularProvider.setResponseExtractor(function extractResponse(serverResponse) {
      return serverResponse.data;
    });

    // $locationProvider.html5Mode(true);
  }


}).call(this);
