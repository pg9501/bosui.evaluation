/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope,$mdDialog,$location,AuthenticationService) {


        var vm = this;

        vm.login = login;
        //vm.cookie=false;
        vm.password="123456";
        /*(function initController() {
         // reset login status
         AuthenticationService.ClearCredentials();
         })();*/

        vm.flash=null;
        vm.username='';
        function login () {
            vm.dataLoading = true;
          //  $rootScope.username=vm.username;
            console.log(vm.username);
            if(vm.username.indexOf("_")<0){
                vm.dataLoading = false;
                vm.flash={type:"error",message:"Username is incorrect."};

                return;
            }
            window.localStorage.setItem('evaluation-user', vm.username);
            window.localStorage.setItem('ip-address', 'http://192.168.20.43:58087');
           /* if(vm.username.indexOf("_")<0){
                vm.dataLoading = false;
                vm.flash={type:"error",message:"Username is incorrect."};
            }else{
                $location.path('/welcome');
            }*/

             AuthenticationService.Login(vm.username, vm.password, function (response) {
             response.success=true;
             if (response.success) {
             var user={};
             user.name=vm.username;
             user.password=vm.password;
             AuthenticationService.SetCredentials(vm.username, vm.password);
             vm.dataLoading = false;
             $location.path('/welcome');
             } else {
             vm.dataLoading = false;
             vm.flash={type:"error",message:"Username is incorrect."};
             }
             });
        }
        function showAlert(msg) {
            var alert = $mdDialog.alert({
                title: 'Authentication failed',
                textContent: msg,
                ok: 'Close'
            });

            $mdDialog
                .show( alert )
                .finally(function() {
                    alert = undefined;
                });
        }
    }

})();