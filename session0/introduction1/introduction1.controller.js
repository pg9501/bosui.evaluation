/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Session0Introduction1Controller', Session0Introduction1Controller);

    /** @ngInject */
    function Session0Introduction1Controller($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;

        vm.username = window.localStorage.getItem('evaluation-user');

        vm.userSeq=vm.username.slice(vm.username.indexOf("_")+1);
        
       
        vm.next=function () {
            if(isEven(vm.userSeq)){
                $location.path('/admin/loginInfo');
            }else{
                $location.path('/emp/loginInfo');
            }
            
        };

        function isEven(n) {
            return n % 2 == 0;
        }
        
    }

})();