/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('QuestionnairePart2NewIntroductionController', QuestionnairePart2NewIntroductionController);

    /** @ngInject */
    function QuestionnairePart2NewIntroductionController($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
       
        vm.enter=function () {
            $location.path('/questionnaire/part2new/question12');
        }
    }

})();