/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AdminTask1Controller', AdminTask1Controller);

    /** @ngInject */
    function AdminTask1Controller($rootScope,$scope,$http,$location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);



        var amt = 0;

        var vm=this;
        
        vm.timeLimit=20;
       // vm.numberOfTasks=26;
        vm.numberOfTasks=27;
        vm.remainingTime=10;
        
        vm.isFinished=false;
        var ipAddress=window.localStorage.getItem('ip-address');

     /*   $scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
            
            if(!vm.isFinished){
                    event.preventDefault(); // This prevents the navigation from happening
                }
            }
        );*/
        


        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

        vm.countTo = amt;
        vm.countFrom = 0;

        //vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;
        vm.username = window.localStorage.getItem('evaluation-user');

        vm.finished = function(){
            // Finish callback
            
            /*if(!vm.isFinished){
                vm.isFinished=true;
                var usedTime=vm.timeLimit;
                var task={role:"Administrator",taskNum:"1",time:usedTime,userName:vm.username};
                UpdateEvaluationTask(task).then(function (result) {
                    console.log(result);

                });
                $location.path('/admin/task2');
            }*/
            
        };
        vm.next=function () {
            /*console.log("remaining time is "+vm.remainingTime);
            console.log("vm.countTo is "+vm.countTo);*/

            vm.isFinished=true;
            var usedTime=vm.timeLimit-vm.remainingTime;
            var task={role:"Administrator",taskNum:"1",time:usedTime,userName:vm.username};
            UpdateEvaluationTask(task).then(function (result) {
                console.log(result);

            });
            $location.path('/admin/task2');


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