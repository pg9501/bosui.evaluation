/**
 * Created by pg9501 on 19.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AdminLoginInfoController', AdminLoginInfoController);

    /** @ngInject */
    function AdminLoginInfoController($location) {
        
       var vm=this;
        vm.next=function () {
            $location.path('/admin/task1');
        }
    }

})();