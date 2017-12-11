/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewQuestion910Controller', QuestionnairePart1NewQuestion910Controller);

    /** @ngInject */
    function QuestionnairePart1NewQuestion910Controller($rootScope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 8;

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
        vm.isSaveMoney=false;
        vm.isConvenience=false;
        vm.isClearView=false;
        vm.isSecurity=false;
        vm.isOtherPurpose=false;
        vm.otherPurpose='';

        var questionnairePart1 =JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));

        if (questionnairePart1 !== null) {

            for(var i in questionnairePart1){
                var question=questionnairePart1[i];

                if(question.questionNum==='9'){

                    var answer=question.answer.split("_");

                    vm.isSaveMoney=(answer[0]=== 'true');
                    vm.isConvenience=(answer[1]=== 'true');
                    vm.isClearView=(answer[2]=== 'true');
                    vm.isSecurity=(answer[3]=== 'true');
                    vm.isOtherPurpose=(answer[4]=== 'true');
                    vm.otherPurpose=answer[5];

                }
                if(question.questionNum==='10'){

                    vm.answer2=question.answer;

                }
            }
        }

        vm.back=function () {
            $location.path('/questionnaire/part1new/question678');
        };
        
        vm.next=function () {

            var answer1=vm.isSaveMoney+"_"+vm.isConvenience+"_"+vm.isClearView+"_"+vm.isSecurity+"_"+vm.isOtherPurpose+"_"+vm.otherPurpose;
            var question1={userName:vm.username, type:"part1bos",questionNum:"9",answer:answer1};
            
            var question2={userName:vm.username, type:"part1compare",questionNum:"10",answer:vm.answer2};

            var isExisted=false;
            for(var i in questionnairePart1){
                var question=questionnairePart1[i];

                if(question.questionNum==='9'){
                    isExisted=true;
                    question.answer=answer1;
                }
                if(question.questionNum==='10'){
                    isExisted=true;
                    question.answer=vm.answer2;
                }
            }

            if(!isExisted){
                questionnairePart1.push(question1);
                questionnairePart1.push(question2);
            }

            window.localStorage.setItem('evaluation-questionnaire-part-1', JSON.stringify(questionnairePart1));
            
          $location.path('/questionnaire/part1new/question111213');
           // $location.path('/questionnaire/part3/introduction');
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