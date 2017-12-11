/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewReviewController', QuestionnairePart2NewReviewController);

    /** @ngInject */
    function QuestionnairePart2NewReviewController($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 18;

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

        vm.answers = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        vm.answer1bos=vm.answers[0].bos.answer;
        vm.answer1emp=vm.answers[0].emp.answer;
        vm.answer2bos=vm.answers[1].bos.answer;
        vm.answer2emp=vm.answers[1].emp.answer;
        vm.answer3bos=vm.answers[2].bos.answer;
        vm.answer3emp=vm.answers[2].emp.answer;
        vm.answer4bos=vm.answers[3].bos.answer;
        vm.answer4emp=vm.answers[3].emp.answer;
        vm.answer5bos=vm.answers[4].bos.answer;
        vm.answer5emp=vm.answers[4].emp.answer;
        vm.answer6bos=vm.answers[5].bos.answer;
        vm.answer6emp=vm.answers[5].emp.answer;
        vm.answer7bos=vm.answers[6].bos.answer;
        vm.answer7emp=vm.answers[6].emp.answer;
        vm.answer8bos=vm.answers[7].bos.answer;
        vm.answer8emp=vm.answers[7].emp.answer;
        vm.answer9bos=vm.answers[8].bos.answer;
        vm.answer9emp=vm.answers[8].emp.answer;
        vm.answer10bos=vm.answers[9].bos.answer;
        vm.answer10emp=vm.answers[9].emp.answer;
        
        vm.isQ1bosOptionsVisable=false;
        vm.isQ2bosOptionsVisable=false;
        vm.isQ3bosOptionsVisable=false;
        vm.isQ4bosOptionsVisable=false;
        vm.isQ5bosOptionsVisable=false;
        vm.isQ6bosOptionsVisable=false;
        vm.isQ7bosOptionsVisable=false;
        vm.isQ8bosOptionsVisable=false;
        vm.isQ9bosOptionsVisable=false;
        vm.isQ10bosOptionsVisable=false;

        vm.isQ1empOptionsVisable=false;
        vm.isQ2empOptionsVisable=false;
        vm.isQ3empOptionsVisable=false;
        vm.isQ4empOptionsVisable=false;
        vm.isQ5empOptionsVisable=false;
        vm.isQ6empOptionsVisable=false;
        vm.isQ7empOptionsVisable=false;
        vm.isQ8empOptionsVisable=false;
        vm.isQ9empOptionsVisable=false;
        vm.isQ10empOptionsVisable=false;

      
       
        vm.showQ1Options=function () {
            vm.isQ1bosOptionsVisable=true;
            vm.isQ1empOptionsVisable=true;
        };
        vm.showQ2Options=function () {
            vm.isQ2bosOptionsVisable=true;
            vm.isQ2empOptionsVisable=true;
        };
        vm.showQ3Options=function () {
            vm.isQ3bosOptionsVisable=true;
            vm.isQ3empOptionsVisable=true;
        };
        vm.showQ4Options=function () {
            vm.isQ4bosOptionsVisable=true;
            vm.isQ4empOptionsVisable=true;
        };
        vm.showQ5Options=function () {
            vm.isQ5bosOptionsVisable=true;
            vm.isQ5empOptionsVisable=true;
        };
        vm.showQ6Options=function () {
            vm.isQ6bosOptionsVisable=true;
            vm.isQ6empOptionsVisable=true;
        };
        vm.showQ7Options=function () {
            vm.isQ7bosOptionsVisable=true;
            vm.isQ7empOptionsVisable=true;
        };
        vm.showQ8Options=function () {
            vm.isQ8bosOptionsVisable=true;
            vm.isQ8empOptionsVisable=true;
        };
        vm.showQ9Options=function () {
            vm.isQ9bosOptionsVisable=true;
            vm.isQ9empOptionsVisable=true;
        };
        vm.showQ10Options=function () {
            vm.isQ10bosOptionsVisable=true;
            vm.isQ10empOptionsVisable=true;
        };

        vm.next=function () {

            for(var i in vm.answers){
                var answer=vm.answers[i];
                //console.log(answer.bos);
                //console.log(answer.emp);
        //        ipAddress='http://192.168.2.106:58087';
                UpdateEvaluationQuestionnaire(answer.bos);
                UpdateEvaluationQuestionnaire(answer.emp);
            }
            $location.path('/questionnaireEnd');
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