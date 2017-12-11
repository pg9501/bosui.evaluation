/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewQuestion123Controller', QuestionnairePart1NewQuestion123Controller);

    /** @ngInject */
    function QuestionnairePart1NewQuestion123Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 0;

        var vm=this;

        vm.missedFunc="";
        vm.redundantFunc="";
        
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

        vm.answer1bos="";
        vm.answer1emp="";
        vm.answer2="";
        vm.answer3="";
        var questionnairePart1 =JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));

        if (questionnairePart1 !== null) {

            for(var i in questionnairePart1){
                var question=questionnairePart1[i];

                if(question.questionNum==='1'){

                    if(question.type==='part1bos'){
                        vm.answer1bos=question.answer;
                    }
                    if(question.type==='part1emp'){
                        vm.answer1emp=question.answer;
                    }

                }
                if(question.questionNum==='2'){
                    vm.answer2=question.answer.substring(0,question.answer.indexOf("_"));
                    vm.missedFunc=question.answer.substring(question.answer.indexOf("_")+1);
                }
                if(question.questionNum==='3'){
                    vm.answer3=question.answer.substring(0,question.answer.indexOf("_"));
                    vm.redundantFunc=question.answer.substring(question.answer.indexOf("_")+1);
                }
            }
        }
        
        vm.next=function () {

           // console.log("vm.answer1: "+vm.answer1);
            var question1bos={userName:vm.username, type:"part1bos",questionNum:"1",answer:vm.answer1bos};
            var question1emp={userName:vm.username, type:"part1emp",questionNum:"1",answer:vm.answer1emp};
            var question2={userName:vm.username, type:"part1bos",questionNum:"2",answer:vm.answer2+"_"+vm.missedFunc};
            var question3={userName:vm.username, type:"part1bos",questionNum:"3",answer:vm.answer3+"_"+vm.redundantFunc};

            var isExisted=false;
            if (questionnairePart1 !== null) {
                for(var i in questionnairePart1){
                    var question=questionnairePart1[i];
                    if(question.questionNum==='1'){
                        isExisted=true;
                        if(question.type==='part1bos'){
                            question.answer=vm.answer1bos;
                        }
                        if(question.type==='part1emp'){
                            question.answer=vm.answer1emp;
                        }
                    }
                    if(question.questionNum==='2'){
                        isExisted=true;
                        question.answer=vm.answer2+"_"+vm.missedFunc;
                    }
                    if(question.questionNum==='3'){
                        isExisted=true;
                        question.answer=vm.answer3+"_"+vm.redundantFunc;
                    }
                }
            }
            if(!isExisted){
                if(questionnairePart1===null){
                    questionnairePart1=[];
                }
                questionnairePart1.push(question1bos);
                questionnairePart1.push(question1emp);
                questionnairePart1.push(question2);
                questionnairePart1.push(question3);
            }
            
            window.localStorage.setItem('evaluation-questionnaire-part-1', JSON.stringify(questionnairePart1));

          /*  UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });*/
            $location.path('/questionnaire/part1new/question45');
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