/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart3IntroductionController', QuestionnairePart3IntroductionController);

    /** @ngInject */
    function QuestionnairePart3IntroductionController($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
       
        vm.enter=function () {
            $location.path('/questionnaire/part3/question123');
        }
    }

})();