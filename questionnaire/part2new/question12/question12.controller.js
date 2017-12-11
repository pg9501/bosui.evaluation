/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewQuestion12Controller', QuestionnairePart2NewQuestion12Controller);

    /** @ngInject */
    function QuestionnairePart2NewQuestion12Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 17;

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

        var questionnairePart2 = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        if (questionnairePart2 !== null) {

            for(var i in questionnairePart2){
                var questionBOS=questionnairePart2[i].bos;
                var questionEMP=questionnairePart2[i].emp;

                if(questionBOS.questionNum==='1'){
                    vm.answer1bos=questionBOS.answer;
                    vm.answer1emp=questionEMP.answer;
                }
                if(questionBOS.questionNum==='2'){
                    vm.answer2bos=questionBOS.answer;
                    vm.answer2emp=questionEMP.answer;
                }

            }
        }

        vm.next=function () {
            var question1bos={userName:vm.username, type:"part2bos",questionNum:"1",answer:vm.answer1bos};
            var question1emp={userName:vm.username, type:"part2emp",questionNum:"1",answer:vm.answer1emp};
            var question2bos={userName:vm.username, type:"part2bos",questionNum:"2",answer:vm.answer2bos};
            var question2emp={userName:vm.username, type:"part2emp",questionNum:"2",answer:vm.answer2emp};
            var question1={bos:question1bos,emp:question1emp};
            var question2={bos:question2bos,emp:question2emp};
            var isExisted=false;
            if (questionnairePart2 !== null) {
                for(var i in questionnairePart2){
                    var questionBOS=questionnairePart2[i].bos;
                    var questionEMP=questionnairePart2[i].emp;

                    if(questionBOS.questionNum==='1'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer1bos;
                        questionEMP.answer=vm.answer1emp;
                    }
                    if(questionBOS.questionNum==='2'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer2bos;
                        questionEMP.answer=vm.answer2emp;
                    }

                }
            }
            if(!isExisted){
                if(questionnairePart2===null){
                    questionnairePart2=[];
                }
                questionnairePart2.push(question1);
                questionnairePart2.push(question2);
            }


            window.localStorage.setItem('evaluation-questionnaire-part-2', JSON.stringify(questionnairePart2));
            
            //   var test = window.localStorage.getItem('evaluation-questionnaire-part-2');

        //    console.log("testtttttttttt is");
        //    console.log(JSON.parse(test));

            /*UpdateEvaluationQuestionnaire(question1).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question2).then(function (result) {
                console.log(result);
            });
            UpdateEvaluationQuestionnaire(question3).then(function (result) {
                console.log(result);
            });*/
           $location.path('/questionnaire/part2new/question34');
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