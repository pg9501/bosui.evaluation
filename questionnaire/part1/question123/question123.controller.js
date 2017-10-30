/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1Question123Controller', QuestionnairePart1Question123Controller);

    /** @ngInject */
    function QuestionnairePart1Question123Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 0;

        var vm=this;

        vm.missedFunc="";
        vm.redundantFunc="";
        
        vm.timeLimit=10;
        vm.numberOfTasks=38;
        vm.remainingTime=100;
        vm.isFinished=false;

        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

        vm.countTo = amt;
        vm.countFrom = 0;

        //vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;
        vm.username=$rootScope.username;
        
        vm.userSeq=vm.username.slice(vm.username.indexOf("_")+1);
        
        //console.log("vm.userSeq is "+vm.userSeq);

        vm.answer1="";
        vm.answer2="";
        vm.answer3="";
        vm.next=function () {

           // console.log("vm.answer1: "+vm.answer1);
            var question1={userName:vm.username, type:"part1",questionNum:"1",answer:vm.answer1};
            var question2={userName:vm.username, type:"part1",questionNum:"2",answer:vm.answer2+"_"+vm.missedFunc};
            var question3={userName:vm.username, type:"part1",questionNum:"3",answer:vm.answer3+"_"+vm.redundantFunc};
            UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });
            $location.path('/questionnaire/part1/question456');
        }
        function UpdateEvaluationQuestionnaire(question) {
            return $http.put('http://localhost:8087/bos/api/evaluationQuestionnaire/',question).then(handleSuccess, handleError('Error putting questionnaire info'));
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