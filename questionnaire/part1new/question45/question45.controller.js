/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewQuestion45Controller', QuestionnairePart1NewQuestion45Controller);

    /** @ngInject */
    function QuestionnairePart1NewQuestion45Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 3;

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

        vm.answer1bos="";
        vm.answer1emp="";
        vm.answer2bos="";
        vm.answer2emp="";

        var questionnairePart1 =JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));

        if (questionnairePart1 !== null) {

            for(var i in questionnairePart1){
                var question=questionnairePart1[i];
                if(question.questionNum==='4'){

                    if(question.type==='part1bos'){
                        vm.answer1bos=question.answer;
                    }
                    if(question.type==='part1emp'){
                        vm.answer1emp=question.answer;
                    }

                }
                if(question.questionNum==='5'){

                    if(question.type==='part1bos'){
                        vm.answer2bos=question.answer;
                    }
                    if(question.type==='part1emp'){
                        vm.answer2emp=question.answer;
                    }

                }
            }
        }

        vm.back=function () {
            $location.path('/questionnaire/part1new/question123');
        };
        
        vm.next=function () {
            var question1bos={userName:vm.username, type:"part1bos",questionNum:"4",answer:vm.answer1bos};
            var question1emp={userName:vm.username, type:"part1emp",questionNum:"4",answer:vm.answer1emp};
            var question2bos={userName:vm.username, type:"part1bos",questionNum:"5",answer:vm.answer2bos};
            var question2emp={userName:vm.username, type:"part1emp",questionNum:"5",answer:vm.answer2emp};
            
            var isExisted=false;
            for(var i in questionnairePart1){
                var question=questionnairePart1[i];
                if(question.questionNum==='4'){
                    isExisted=true;
                    if(question.type==='part1bos'){
                        question.answer=vm.answer1bos;
                    }
                    if(question.type==='part1emp'){
                        question.answer=vm.answer1emp;
                    }
                }
                if(question.questionNum==='5'){
                    isExisted=true;
                    if(question.type==='part1bos'){
                        question.answer=vm.answer2bos;
                    }
                    if(question.type==='part1emp'){
                        question.answer=vm.answer2emp;
                    }
                }
            }
            if(!isExisted){
                questionnairePart1.push(question1bos);
                questionnairePart1.push(question1emp);
                questionnairePart1.push(question2bos);
                questionnairePart1.push(question2emp);
            }

            window.localStorage.setItem('evaluation-questionnaire-part-1', JSON.stringify(questionnairePart1));
            
           /* UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });*/
           $location.path('/questionnaire/part1new/question678');
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