/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnaireEndController', QuestionnaireEndController);

    /** @ngInject */
    function QuestionnaireEndController($location,$cookies,$localStorage,$window) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;

        $window.localStorage.clear();

        $localStorage.$reset();

    }

})();