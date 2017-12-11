/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1NewReviewController', QuestionnairePart1NewReviewController);

    /** @ngInject */
    function QuestionnairePart1NewReviewController($rootScope,$location,$cookies,$timeout,$http) {
        
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

        vm.answers = JSON.parse(window.localStorage.getItem('evaluation-questionnaire-part-1'));


        vm.answer2text=vm.answers[2].answer.substring(0,vm.answers[2].answer.indexOf("_"));
        vm.answer2model=vm.answer2text;
        vm.missedFunc=vm.answers[2].answer.substring(vm.answers[2].answer.indexOf("_")+1);
        if(vm.answer2text.indexOf("do")>=0){
            vm.answer2text="Don't know";
            vm.missedFunc="";
            vm.answer2model="do_not_know";
        }
        
        vm.answer3text=vm.answers[3].answer.substring(0,vm.answers[3].answer.indexOf("_"));
        vm.answer3model=vm.answer3text;
        vm.redundantFunc=vm.answers[3].answer.substring(vm.answers[3].answer.indexOf("_")+1);
        if(vm.answer3text.indexOf("do")>=0){
            vm.answer3text="Don't know";
            vm.redundantFunc="";
            vm.answer3model="do_not_know";
        }
        
        vm.answer7model=vm.answers[10].answer;

        vm.answer7text=vm.answer7model;
        if(vm.answer7model.indexOf('do')>=0){
            vm.answer7text="Don't know";
        }
     
        vm.answer11=vm.answers[12].answer.split("_");

        vm.isSaveMoney=(vm.answer11[0]=== 'true');
        vm.isConvenience=(vm.answer11[1]=== 'true');
        vm.isClearView=(vm.answer11[2]=== 'true');
        vm.isSecurity=(vm.answer11[3]=== 'true');
        vm.isOtherPurpose=(vm.answer11[4]=== 'true');
        vm.otherPurpose=vm.answer11[5];


        vm.answer17=vm.answers[20].answer.substring(0,vm.answers[20].answer.indexOf("_"));
        vm.comments=vm.answers[20].answer.substring(vm.answers[20].answer.indexOf("_")+1);
        
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
        vm.isQ11bosOptionsVisable=false;
        vm.isQ12bosOptionsVisable=false;
        vm.isQ13bosOptionsVisable=false;
        vm.isQ14bosOptionsVisable=false;
        vm.isQ15bosOptionsVisable=false;
        vm.isQ16bosOptionsVisable=false;
        vm.isQ17bosOptionsVisable=false;

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
        vm.showQ11Options=function () {
            vm.isQ11bosOptionsVisable=true;
            vm.isQ11empOptionsVisable=true;
        };
        vm.showQ12Options=function () {
            vm.isQ12bosOptionsVisable=true;
            vm.isQ12empOptionsVisable=true;
        };
        vm.showQ13Options=function () {
            vm.isQ13bosOptionsVisable=true;
            vm.isQ13empOptionsVisable=true;
        };
        vm.showQ14Options=function () {
            vm.isQ14bosOptionsVisable=true;
            vm.isQ14empOptionsVisable=true;
        };
        vm.showQ15Options=function () {
            vm.isQ15bosOptionsVisable=true;
            vm.isQ15empOptionsVisable=true;
        };
        vm.showQ16Options=function () {
            vm.isQ16bosOptionsVisable=true;
            vm.isQ16empOptionsVisable=true;
        };
        vm.showQ17Options=function () {
            vm.isQ17bosOptionsVisable=true;
            vm.isQ17empOptionsVisable=true;
        };

        vm.next=function () {

         //   ipAddress='http://192.168.2.106:58087';
            for(var i in vm.answers){
                var answer=vm.answers[i];
                if(answer.questionNum==='1'){
                   // console.log(answer);
                    UpdateEvaluationQuestionnaire(answer);
                }
                if(answer.questionNum==='2'){
                    var question2={userName:vm.username, type:"part1bos",questionNum:"2",answer:vm.answer2model+"_"+vm.missedFunc};
                 //   console.log(question2);
                    UpdateEvaluationQuestionnaire(question2);
                }
                if(answer.questionNum==='3'){
                    var question3={userName:vm.username, type:"part1bos",questionNum:"3",answer:vm.answer3model+"_"+vm.redundantFunc};
                  //  console.log(question3);
                    UpdateEvaluationQuestionnaire(question3);
                }
                if(i>3&& i<10){
                  //  console.log(answer);
                    UpdateEvaluationQuestionnaire(answer);
                }
                if(answer.questionNum==='7'){
                    var question7={userName:vm.username, type:"part1bos",questionNum:"7",answer:vm.answer7model};
                  //  console.log(question7);
                    UpdateEvaluationQuestionnaire(question7);
                }
                if(answer.questionNum==='8'){
                  //  console.log(answer);
                    UpdateEvaluationQuestionnaire(answer);
                }
                if(answer.questionNum==='9'){
                    var answer9=vm.isSaveMoney+"_"+vm.isConvenience+"_"+vm.isClearView+"_"+vm.isSecurity+"_"+vm.isOtherPurpose+"_"+vm.otherPurpose;
                    var question9={userName:vm.username, type:"part1bos",questionNum:"9",answer:answer9};
                 //   console.log(question9);
                    UpdateEvaluationQuestionnaire(question9);
                }
                if(i>12&&i<(vm.answers.length-1)){
                  //  console.log(answer);
                    UpdateEvaluationQuestionnaire(answer);
                }
                if(answer.questionNum==='17'){
                    var question17={userName:vm.username, type:"part1compare",questionNum:"17",answer:vm.answer17+"_"+vm.comments};
                 //   console.log(question17);
                    UpdateEvaluationQuestionnaire(question17);
                }
            }
            $location.path('/questionnaire/part2new/introduction');
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