/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('OperatorTask4Controller', OperatorTask4Controller);

    /** @ngInject */
    function OperatorTask4Controller($rootScope,$scope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 6;

        var vm=this;
        
        vm.consumption='';
        vm.generation='';

        vm.timeLimit=200;
        vm.numberOfTasks=27;
        vm.remainingTime=100;
        vm.isFinished=false;

        var ipAddress=window.localStorage.getItem('ip-address');

        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

        /*$scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {

                if(!vm.isFinished){
                    event.preventDefault(); // This prevents the navigation from happening
                }
            }
        );*/

        vm.countTo = amt;
        vm.countFrom = 0;

        //vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;
        vm.username = window.localStorage.getItem('evaluation-user');
        vm.userSeq=vm.username.slice(vm.username.indexOf("_")+1);
        if(isOdd(vm.userSeq)){
            amt = 11;
        }
        function isOdd(n) {
            return Math.abs(n % 2) == 1;
        }
        vm.countTo = amt;

        

        vm.finished = function(){
            // Finish callback
           /* if(!vm.isFinished){
                vm.isFinished=true;
                var usedTime=vm.timeLimit;
                var task={role:"Operator",taskNum:"4",time:usedTime,userName:vm.username,answer1:vm.consumption,answer2:vm.generation};
                UpdateEvaluationTask(task).then(function (result) {
                    console.log(result);

                });
                $location.path('/operator/task5');
            }*/
            
        };
        vm.next=function () {
            vm.isFinished=true;
            var usedTime=vm.timeLimit-vm.remainingTime;
            var task={role:"Operator",taskNum:"4",time:usedTime,userName:vm.username,answer1:vm.consumption,answer2:vm.generation};
            UpdateEvaluationTask(task).then(function (result) {
                console.log(result);

            });
            $location.path('/operator/task5');
        };
        function UpdateEvaluationTask(task) {
            return $http.put(ipAddress+'/bos/api/evaluationTask/',task).then(handleSuccess, handleError('Error putting user info'));
        }
        function handleSuccess(res) {
            return res.data;
        }
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();