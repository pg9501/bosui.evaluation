/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TaskEndController', TaskEndController);

    /** @ngInject */
    function TaskEndController($scope,$location,$window) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;

        vm.isFinished=false;

        /*$scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {

                if(!vm.isFinished){
                    event.preventDefault(); // This prevents the navigation from happening
                }
            }
        );*/

       
       
        vm.next=function () {
            vm.isFinished=true;
            $location.path('/questionnaire/part1/introduction');
        }
    }

})();