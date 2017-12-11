/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewQuestion78Controller', QuestionnairePart2NewQuestion78Controller);

    /** @ngInject */
    function QuestionnairePart2NewQuestion78Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 23;

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

        vm.answer7bos="";
        vm.answer7emp="";
        vm.answer8bos="";
        vm.answer8emp="";
        var questionnairePart2 = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        if (questionnairePart2 !== null) {

            for(var i in questionnairePart2){
                var questionBOS=questionnairePart2[i].bos;
                var questionEMP=questionnairePart2[i].emp;

                if(questionBOS.questionNum==='7'){
                    vm.answer7bos=questionBOS.answer;
                    vm.answer7emp=questionEMP.answer;
                }
                if(questionBOS.questionNum==='8'){
                    vm.answer8bos=questionBOS.answer;
                    vm.answer8emp=questionEMP.answer;
                }

            }
        }
        vm.back=function () {
            $location.path('/questionnaire/part2new/question56');
        };
        vm.next=function () {
            var question7bos={userName:vm.username, type:"part2bos",questionNum:"7",answer:vm.answer7bos};
            var question7emp={userName:vm.username, type:"part2emp",questionNum:"7",answer:vm.answer7emp};
            var question8bos={userName:vm.username, type:"part2bos",questionNum:"8",answer:vm.answer8bos};
            var question8emp={userName:vm.username, type:"part2emp",questionNum:"8",answer:vm.answer8emp};
            var question7={bos:question7bos,emp:question7emp};
            var question8={bos:question8bos,emp:question8emp};
            var isExisted=false;
            if (questionnairePart2 !== null) {
                for(var i in questionnairePart2){
                    var questionBOS=questionnairePart2[i].bos;
                    var questionEMP=questionnairePart2[i].emp;

                    if(questionBOS.questionNum==='7'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer7bos;
                        questionEMP.answer=vm.answer7emp;
                    }
                    if(questionBOS.questionNum==='8'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer8bos;
                        questionEMP.answer=vm.answer8emp;
                    }

                }
            }
            if(!isExisted) {
                questionnairePart2.push(question7);
                questionnairePart2.push(question8);
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
           $location.path('/questionnaire/part2new/question910');
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