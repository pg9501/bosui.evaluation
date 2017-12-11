/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewQuestion678Controller', QuestionnairePart1NewQuestion678Controller);

    /** @ngInject */
    function QuestionnairePart1NewQuestion678Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 5;

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
        vm.answer2="";
        vm.answer3="";

        var questionnairePart1 =JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));

        if (questionnairePart1 !== null) {

            for(var i in questionnairePart1){
                var question=questionnairePart1[i];

                if(question.questionNum==='6'){

                    if(question.type==='part1bos'){
                        vm.answer1bos=question.answer;
                    }
                    if(question.type==='part1emp'){
                        vm.answer1emp=question.answer;
                    }
                }
                if(question.questionNum==='7'){
                    vm.answer2=question.answer;
                }
                if(question.questionNum==='8'){
                    vm.answer3=question.answer;
                }
            }
        }

        vm.back=function () {
            $location.path('/questionnaire/part1new/question45');
        };
        
        vm.next=function () {
            var question1bos={userName:vm.username, type:"part1bos",questionNum:"6",answer:vm.answer1bos};
            var question1emp={userName:vm.username, type:"part1emp",questionNum:"6",answer:vm.answer1emp};
            var question2={userName:vm.username, type:"part1bos",questionNum:"7",answer:vm.answer2};
            var question3={userName:vm.username, type:"part1bos",questionNum:"8",answer:vm.answer3};

            var isExisted=false;
            for(var i in questionnairePart1){
                var question=questionnairePart1[i];
                if(question.questionNum==='6'){
                    isExisted=true;
                    if(question.type==='part1bos'){
                        question.answer=vm.answer1bos;
                    }
                    if(question.type==='part1emp'){
                        question.answer=vm.answer1emp;
                    }
                }
                if(question.questionNum==='7'){
                    isExisted=true;
                    question.answer=vm.answer2;
                }
                if(question.questionNum==='8'){
                    isExisted=true;
                    question.answer=vm.answer3;
                }
            }

            if(!isExisted){
                questionnairePart1.push(question1bos);
                questionnairePart1.push(question1emp);
                questionnairePart1.push(question2);
                questionnairePart1.push(question3);
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
           $location.path('/questionnaire/part1new/question910');
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