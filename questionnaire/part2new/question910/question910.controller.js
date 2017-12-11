/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewQuestion910Controller', QuestionnairePart2NewQuestion910Controller);

    /** @ngInject */
    function QuestionnairePart2NewQuestion910Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 25;

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

        vm.answer9bos="";
        vm.answer9emp="";
        vm.answer10bos="";
        vm.answer10emp="";
        var questionnairePart2 = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        if (questionnairePart2 !== null) {

            for(var i in questionnairePart2){
                var questionBOS=questionnairePart2[i].bos;
                var questionEMP=questionnairePart2[i].emp;

                if(questionBOS.questionNum==='9'){
                    vm.answer9bos=questionBOS.answer;
                    vm.answer9emp=questionEMP.answer;
                }
                if(questionBOS.questionNum==='10'){
                    vm.answer10bos=questionBOS.answer;
                    vm.answer10emp=questionEMP.answer;
                }
            }
        }
        vm.back=function () {
            $location.path('/questionnaire/part2new/question78');
        };
        vm.next=function () {
            var question9bos={userName:vm.username, type:"part2bos",questionNum:"9",answer:vm.answer9bos};
            var question9emp={userName:vm.username, type:"part2emp",questionNum:"9",answer:vm.answer9emp};
            var question10bos={userName:vm.username, type:"part2bos",questionNum:"10",answer:vm.answer10bos};
            var question10emp={userName:vm.username, type:"part2emp",questionNum:"10",answer:vm.answer10emp};
            var question9={bos:question9bos,emp:question9emp};
            var question10={bos:question10bos,emp:question10emp};
            var isExisted=false;
            if (questionnairePart2 !== null) {
                for(var i in questionnairePart2){
                    var questionBOS=questionnairePart2[i].bos;
                    var questionEMP=questionnairePart2[i].emp;

                    if(questionBOS.questionNum==='9'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer9bos;
                        questionEMP.answer=vm.answer9emp;
                    }
                    if(questionBOS.questionNum==='10'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer10bos;
                        questionEMP.answer=vm.answer10emp;
                    }

                }
            }
            if(!isExisted) {
                questionnairePart2.push(question9);
                questionnairePart2.push(question10);
            }

            window.localStorage.setItem('evaluation-questionnaire-part-2', JSON.stringify(questionnairePart2));

            /*UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });*/
         //  $location.path('/questionnaire/part2new/question910');
            $location.path('/questionnaire/part2new/review');
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