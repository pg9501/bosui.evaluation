/**
 * Created by pg9501 on 18.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    /** @ngInject */
    function WelcomeController($rootScope,$location,$cookies,$http) {

      
        var vm=this;
        vm.gender='';
        vm.age='';
        vm.subject='';
        vm.education='';
        vm.otherEducation='';
        vm.email='';
        vm.knowledge='';
        vm.isUsed='';
        vm.smartHomeTechnologies='';
        vm.educationOther='';

       // vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;

        vm.username = window.localStorage.getItem('evaluation-user');

        var ipAddress=window.localStorage.getItem('ip-address');
        

        vm.submit=function () {
           /*console.log("vm.gender is "+vm.gender+" age is "+vm.age+" subject is "+vm.subject+" education is "+vm.education+" educationOther is "+vm.educationOther+" email is "+vm.email+" isFamiliar is "+vm.isFamiliar
           +" isUsed is "+vm.isUsed+" vm.smartHomeTechnologies is "+vm.smartHomeTechnologies);*/
            if(vm.education==='Other'){
                vm.education=vm.otherEducation;
            }
           var user={userName:vm.username,gender:vm.gender,age:vm.age,subject:vm.subject,education:vm.education,email:vm.email,isFamiliarWithSM:vm.knowledge,isUsedSMUI:vm.isUsed,usedSMTechnologies:vm.smartHomeTechnologies};
            UpdateUserInfo(user).then(function (result) {
                console.log(result);

            });
            $location.path('/session0/introduction');
        };

        function AddUserInfo(user) {
            return $http.post(ipAddress+'/bos/api/evaluationUser/',user).then(handleSuccess, handleError('Error posting user info'));
        }
        function UpdateUserInfo(user) {
            return $http.put(ipAddress+'/bos/api/evaluationUser/',user).then(handleSuccess, handleError('Error putting user info'));
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