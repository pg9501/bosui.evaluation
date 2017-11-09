/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Task1EMPController', Task1EMPController);

    /** @ngInject */
    function Task1EMPController($rootScope,$scope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 22;

        var vm=this;
        
        vm.devices='';
        vm.voltage='';
        vm.energyFlows='';

        vm.timeLimit=200;
        vm.numberOfTasks=26;
        vm.remainingTime=100;
        vm.isFinished=false;

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
        

        vm.finished = function(){
            // Finish callback
            if(!vm.isFinished) {
                vm.isFinished=true;
                var usedTime=vm.timeLimit;
                var task={role:"emp",taskNum:"1",time:usedTime,userName:vm.username,answer1:vm.devices,answer2:vm.voltage,answer3:vm.energyFlows};
                UpdateEvaluationTask(task).then(function (result) {
                    console.log(result);

                });
                $location.path('/emp/task2');
            }
        };
        vm.next=function () {
            vm.isFinished=true;
            var usedTime=vm.timeLimit-vm.remainingTime;
            var task={role:"emp",taskNum:"1",time:usedTime,userName:vm.username,answer1:vm.devices,answer2:vm.voltage,answer3:vm.energyFlows};
            UpdateEvaluationTask(task).then(function (result) {
                console.log(result);

            });
            $location.path('/emp/task2');
        };
        function UpdateEvaluationTask(task) {
            return $http.put('http://172.22.131.15:8087/bos/api/evaluationTask/',task).then(handleSuccess, handleError('Error putting user info'));
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