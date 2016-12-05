// Created an angular module for the app
angular.module('postapp', ['restangular'])
    
    /* Configuration settings for Restangular */
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:3000/');
        //RestangularProvider.setListTypeIsArray(false);
        //RestangularProvider.setFullResponse(true);
        
    });

