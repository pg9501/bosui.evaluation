/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($rootScope,$timeout,$mdDialog,$location,$window) {


        var vm = this;

        vm.login = login;
        //vm.cookie=false;
        //vm.password="123456";
        /*(function initController() {

            // reset login status
            AuthenticationService.ClearCredentials();

        })();*/
        
        vm.flash=null;
        vm.username='';
        function login () {
            vm.dataLoading = true;
            $rootScope.username=vm.username;
            if(vm.username.indexOf("_")<0){
                vm.dataLoading = false;
                vm.flash={type:"error",message:"Username is incorrect."};
            }else{

		$timeout(function () {
                    vm.dataLoading = false;
                    $location.path('/welcome');
			console.log("dddddddddddddd");
                }, 1000);
             
            }
           
            /*AuthenticationService.Login(vm.username, vm.password, function (response) {

                

                if(vm.username.indexOf("_")<0){
                    vm.dataLoading = false;
                    vm.flash={type:"error",message:"Username is incorrect."};
                    response.success=false;
                }else{
                    response.success=true;
                }
                
                if (response.success) {


                   // var user={};
                   // user.name=vm.username;
                   // user.password=vm.password;

                    AuthenticationService.SetCredentials(vm.username, vm.password);

                    vm.dataLoading = false;
                    $location.path('/welcome');
                } else {
                    vm.dataLoading = false;
                    vm.flash={type:"error",message:"Username is incorrect."};
                }
            });*/
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