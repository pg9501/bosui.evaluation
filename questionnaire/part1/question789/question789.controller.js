/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1Question789Controller', QuestionnairePart1Question789Controller);

    /** @ngInject */
    function QuestionnairePart1Question789Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 6;

        var vm=this;
        
        vm.timeLimit=10;
        vm.numberOfTasks=38;
        vm.remainingTime=100;
        vm.isFinished=false;

        var ipAddress=window.localStorage.getItem('ip-address');

        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

        vm.countTo = amt;
        vm.countFrom = 0;

        //vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;
        vm.username = window.localStorage.getItem('evaluation-user');
        
        vm.userSeq=vm.username.slice(vm.username.indexOf("_")+1);
        
        //console.log("vm.userSeq is "+vm.userSeq);

        vm.answer1="";
        vm.answer2="";
        vm.isSaveMoney=false;
        vm.isConvenience=false;
        vm.isClearView=false;
        vm.isSecurity=false;
        vm.isOtherPurpose=false;
        vm.otherPurpose='';
        
        vm.next=function () {

            var question1={userName:vm.username, type:"part1",questionNum:"7",answer:vm.answer1};
            var question2={userName:vm.username, type:"part1",questionNum:"8",answer:vm.answer2};
            var answer3=vm.isSaveMoney+"_"+vm.isConvenience+"_"+vm.isClearView+"_"+vm.isSecurity+"_"+vm.isOtherPurpose+"_"+vm.otherPurpose;
            var question3={userName:vm.username, type:"part1",questionNum:"9",answer:answer3};
            UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });
            
          $location.path('/questionnaire/part1/question101112');
           // $location.path('/questionnaire/part3/introduction');
        };
        function UpdateEvaluationQuestionnaire(question) {
            return $http.put(ipAddress+'/bos/api/evaluationQuestionnaire/',question).then(handleSuccess, handleError('Error putting questionnaire info'));
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