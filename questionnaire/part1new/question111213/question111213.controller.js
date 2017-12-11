/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewQuestion111213Controller', QuestionnairePart1NewQuestion111213Controller);

    /** @ngInject */
    function QuestionnairePart1NewQuestion111213Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
        vm.timeLimit=10;
        vm.numberOfTasks=27;
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
        vm.answer3="";

        var questionnairePart1 =JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));

        if (questionnairePart1 !== null) {

            for(var i in questionnairePart1){
                var question=questionnairePart1[i];
                
                if(question.questionNum==='11'){
                    vm.answer1=question.answer;
                }
                if(question.questionNum==='12'){
                    vm.answer2=question.answer;
                }
                if(question.questionNum==='13'){
                    vm.answer3=question.answer;
                }
            }
        }

        vm.back=function () {
            $location.path('/questionnaire/part1new/question910');
        };
        
        vm.next=function () {

            var question1={userName:vm.username, type:"part1compare",questionNum:"11",answer:vm.answer1};
            var question2={userName:vm.username, type:"part1compare",questionNum:"12",answer:vm.answer2};
            var question3={userName:vm.username, type:"part1compare",questionNum:"13",answer:vm.answer3};

            var isExisted=false;
            for(var i in questionnairePart1){
                var question=questionnairePart1[i];

                if(question.questionNum==='11'){
                    isExisted=true;
                    question.answer=vm.answer1;
                }
                if(question.questionNum==='12'){
                    isExisted=true;
                    question.answer=vm.answer2;
                }
                if(question.questionNum==='13'){
                    isExisted=true;
                    question.answer=vm.answer3;
                }
            }

            if(!isExisted){
                questionnairePart1.push(question1);
                questionnairePart1.push(question2);
                questionnairePart1.push(question3);
            }

            window.localStorage.setItem('evaluation-questionnaire-part-1', JSON.stringify(questionnairePart1));

            $location.path('/questionnaire/part1new/question14151617');
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