/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewQuestion56Controller', QuestionnairePart2NewQuestion56Controller);

    /** @ngInject */
    function QuestionnairePart2NewQuestion56Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 21;

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

        vm.answer5bos="";
        vm.answer5emp="";
        vm.answer6bos="";
        vm.answer6emp="";
        var questionnairePart2 = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-2'));

        if (questionnairePart2 !== null) {

            for(var i in questionnairePart2){
                var questionBOS=questionnairePart2[i].bos;
                var questionEMP=questionnairePart2[i].emp;

                if(questionBOS.questionNum==='5'){
                    vm.answer5bos=questionBOS.answer;
                    vm.answer5emp=questionEMP.answer;
                }
                if(questionBOS.questionNum==='6'){
                    vm.answer6bos=questionBOS.answer;
                    vm.answer6emp=questionEMP.answer;
                }

            }
        }
        vm.back=function () {
            $location.path('/questionnaire/part2new/question34');
        };
        vm.next=function () {
            var question5bos={userName:vm.username, type:"part2bos",questionNum:"5",answer:vm.answer5bos};
            var question5emp={userName:vm.username, type:"part2emp",questionNum:"5",answer:vm.answer5emp};
            var question6bos={userName:vm.username, type:"part2bos",questionNum:"6",answer:vm.answer6bos};
            var question6emp={userName:vm.username, type:"part2emp",questionNum:"6",answer:vm.answer6emp};
            var question5={bos:question5bos,emp:question5emp};
            var question6={bos:question6bos,emp:question6emp};
            var isExisted=false;
            if (questionnairePart2 !== null) {
                for(var i in questionnairePart2){
                    var questionBOS=questionnairePart2[i].bos;
                    var questionEMP=questionnairePart2[i].emp;

                    if(questionBOS.questionNum==='5'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer5bos;
                        questionEMP.answer=vm.answer5emp;
                    }
                    if(questionBOS.questionNum==='6'){
                        var isExisted=true;
                        questionBOS.answer=vm.answer6bos;
                        questionEMP.answer=vm.answer6emp;
                    }

                }
            }
            if(!isExisted){
                questionnairePart2.push(question5);
                questionnairePart2.push(question6);
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
           $location.path('/questionnaire/part2new/question78');
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