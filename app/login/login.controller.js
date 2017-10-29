/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($mdDialog,$location,AuthenticationService) {


        var vm = this;

        vm.login = login;
        vm.cookie=false;
        vm.password="123456";
        (function initController() {

            // reset login status
            AuthenticationService.ClearCredentials();

        })();
        
        vm.flash=null;
        function login () {
            vm.dataLoading = true;
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
                    // console.log("authenticate failed");
                    // FlashService.Error(response.message);
                   // showAlert(response.message);
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