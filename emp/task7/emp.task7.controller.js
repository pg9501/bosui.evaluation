/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Task7EMPController', Task7EMPController);

    /** @ngInject */
    function Task7EMPController($rootScope,$scope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 6;

        var vm=this;

        vm.capacity='';

        vm.timeLimit=200;
        vm.numberOfTasks=8;
        vm.remainingTime=100;
        vm.isFinished=false;

        var ipAddress=window.localStorage.getItem('ip-address');

        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

      /*  $scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {

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

       
        function isOdd(n) {
            return Math.abs(n % 2) == 1;
        }

        vm.countTo = amt;
        vm.finished = function(){
            // Finish callback
          /*  if(!vm.isFinished) {
                vm.isFinished=true;
                var usedTime=vm.timeLimit;
                var task={role:"emp",taskNum:"5",time:usedTime,userName:vm.username,answer1:vm.powerPrediction};
                UpdateEvaluationTask(task).then(function (result) {
                    console.log(result);

                });
                $location.path('/taskEnd');
            }*/
        };
        vm.next=function () {
            vm.isFinished=true;
            var usedTime=vm.timeLimit-vm.remainingTime;
            var task={role:"emp",taskNum:"7",time:usedTime,userName:vm.username,answer1:vm.capacity};
            UpdateEvaluationTask(task).then(function (result) {
                console.log(result);

            });
            $location.path('/emp/task8');
           /* if(isEven(vm.userSeq)){
                $location.path('/taskEnd');
            }else{
                $location.path('/admin/loginInfo');
            }*/
            
        };
        function isEven(n) {
            return n % 2 == 0;
        }
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