/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewQuestion34Controller', QuestionnairePart2NewQuestion34Controller);

    /** @ngInject */
    function QuestionnairePart2NewQuestion34Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 19;

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

        vm.answer3bos="";
        vm.answer3emp="";
        vm.answer4bos="";
        vm.answer4emp="";
        var questionnairePart2 = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        if (questionnairePart2 !== null) {

            for(var i in questionnairePart2){
                var questionBOS=questionnairePart2[i].bos;
                var questionEMP=questionnairePart2[i].emp;

                if(questionBOS.questionNum==='3'){
                    vm.answer3bos=questionBOS.answer;
                    vm.answer3emp=questionEMP.answer;
                }
                if(questionBOS.questionNum==='4'){
                    vm.answer4bos=questionBOS.answer;
                    vm.answer4emp=questionEMP.answer;
                }

            }
        }
        vm.back=function () {
            $location.path('/questionnaire/part2new/question12');
        };
        vm.next=function () {
            var question3bos={userName:vm.username, type:"part2bos",questionNum:"3",answer:vm.answer3bos};
            var question3emp={userName:vm.username, type:"part2emp",questionNum:"3",answer:vm.answer3emp};
            var question4bos={userName:vm.username, type:"part2bos",questionNum:"4",answer:vm.answer4bos};
            var question4emp={userName:vm.username, type:"part2emp",questionNum:"4",answer:vm.answer4emp};
            var question3={bos:question3bos,emp:question3emp};
            var question4={bos:question4bos,emp:question4emp};
            var isExisted=false;
            if (questionnairePart2 !== null) {
                for(var i in questionnairePart2){
                    var questionBOS=questionnairePart2[i].bos;
                    var questionEMP=questionnairePart2[i].emp;

                    if(questionBOS.questionNum==='3'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer3bos;
                        questionEMP.answer=vm.answer3emp;
                    }
                    if(questionBOS.questionNum==='4'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer4bos;
                        questionEMP.answer=vm.answer4emp;
                    }

                }
            }
            if(!isExisted){
                questionnairePart2.push(question3);
                questionnairePart2.push(question4);
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
           $location.path('/questionnaire/part2new/question56');
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