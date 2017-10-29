/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart1IntroductionController', QuestionnairePart1IntroductionController);

    /** @ngInject */
    function QuestionnairePart1IntroductionController($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
       
        vm.next=function () {
            $location.path('/questionnaire/part1/question123');
        }
    }

})();