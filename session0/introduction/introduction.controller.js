/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Session0IntroductionController', Session0IntroductionController);

    /** @ngInject */
    function Session0IntroductionController($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
       
        vm.next=function () {
            $location.path('/admin/loginInfo');
        }
    }

})();