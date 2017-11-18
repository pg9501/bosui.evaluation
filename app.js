(function ()
{
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
      'ngMaterial',
      'ngCookies',
      'circle.countdown',
    'ui.bootstrap',
      'countTo'
  ]).
  config(['$locationProvider', '$routeProvider','$windowProvider',  function( $locationProvider, $routeProvider,$windowProvider) {

          /*var $window = $windowProvider.$get();
      var height=$window.innerHeight-30;
          $('#backgroundDiv').height( height);*/


    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'login/login.view.html',
            controllerAs: 'vm'
        })
        .when('/welcome', {
          controller: 'WelcomeController',
          templateUrl: 'welcome/welcome.html',
          controllerAs: 'vm'
        })
        .when('/session0/introduction', {
            controller: 'Session0IntroductionController',
            templateUrl: 'session0/introduction/introduction.html',
            controllerAs: 'vm'
        })
        .when('/session0/introduction1', {
            controller: 'Session0Introduction1Controller',
            templateUrl: 'session0/introduction1/introduction1.html',
            controllerAs: 'vm'
        })
        .when('/session0/bosui', {
            controller: 'Session0BOSUIController',
            templateUrl: 'session0/bosui/bosui.html',
            controllerAs: 'vm'
        })
        .when('/session0/emp', {
            controller: 'Session0EMPController',
            templateUrl: 'session0/emp/emp.html',
            controllerAs: 'vm'
        })
        .when('/admin/loginInfo', {
          controller: 'AdminLoginInfoController',
          templateUrl: 'admin/loginInfo/admin.loginInfo.html',
          controllerAs: 'vm'
        })
        .when('/admin/task1', {
          controller: 'AdminTask1Controller',
          templateUrl: 'admin/task1/admin.task1.html',
          controllerAs: 'vm'
        })
        .when('/admin/task2', {
          controller: 'AdminTask2Controller',
          templateUrl: 'admin/task2/admin.task2.html',
          controllerAs: 'vm'
        })
        .when('/admin/task3', {
          controller: 'AdminTask3Controller',
          templateUrl: 'admin/task3/admin.task3.html',
          controllerAs: 'vm'
        })
        .when('/operator/loginInfo', {
          controller: 'OperatorLoginInfoController',
          templateUrl: 'operator/loginInfo/operator.loginInfo.html',
          controllerAs: 'vm'
        })
        .when('/operator/task1', {
          controller: 'OperatorTask1Controller',
          templateUrl: 'operator/task1/operator.task1.html',
          controllerAs: 'vm'
        })
        .when('/operator/task2', {
            controller: 'OperatorTask2Controller',
            templateUrl: 'operator/task2/operator.task2.html',
            controllerAs: 'vm'
        })
        .when('/operator/task3', {
            controller: 'OperatorTask3Controller',
            templateUrl: 'operator/task3/operator.task3.html',
            controllerAs: 'vm'
        })
        .when('/operator/task4', {
            controller: 'OperatorTask4Controller',
            templateUrl: 'operator/task4/operator.task4.html',
            controllerAs: 'vm'
        })
        .when('/operator/task5', {
            controller: 'OperatorTask5Controller',
            templateUrl: 'operator/task5/operator.task5.html',
            controllerAs: 'vm'
        })
        .when('/operator/task6', {
            controller: 'OperatorTask6Controller',
            templateUrl: 'operator/task6/operator.task6.html',
            controllerAs: 'vm'
        })
        .when('/resident/loginInfo', {
            controller: 'ResidentLoginInfoController',
            templateUrl: 'resident/loginInfo/resident.loginInfo.html',
            controllerAs: 'vm'
        })
        .when('/resident/task1', {
            controller: 'ResidentTask1Controller',
            templateUrl: 'resident/task1/resident.task1.html',
            controllerAs: 'vm'
        })

        .when('/resident/task2', {
            controller: 'ResidentTask2Controller',
            templateUrl: 'resident/task2/resident.task2.html',
            controllerAs: 'vm'
        })

        .when('/resident/task3', {
            controller: 'ResidentTask3Controller',
            templateUrl: 'resident/task3/resident.task3.html',
            controllerAs: 'vm'
        })

        .when('/resident/task4', {
            controller: 'ResidentTask4Controller',
            templateUrl: 'resident/task4/resident.task4.html',
            controllerAs: 'vm'
        })
        .when('/resident/task5', {
            controller: 'ResidentTask5Controller',
            templateUrl: 'resident/task5/resident.task5.html',
            controllerAs: 'vm'
        })

        .when('/resident/task6', {
            controller: 'ResidentTask6Controller',
            templateUrl: 'resident/task6/resident.task6.html',
            controllerAs: 'vm'
        })
        .when('/resident/task7', {
            controller: 'ResidentTask7Controller',
            templateUrl: 'resident/task7/resident.task7.html',
            controllerAs: 'vm'
        })
        .when('/resident/task8', {
            controller: 'ResidentTask8Controller',
            templateUrl: 'resident/task8/resident.task8.html',
            controllerAs: 'vm'
        })
        .when('/resident/task9', {
            controller: 'ResidentTask9Controller',
            templateUrl: 'resident/task9/resident.task9.html',
            controllerAs: 'vm'
        })
        .when('/resident/task10', {
            controller: 'ResidentTask10Controller',
            templateUrl: 'resident/task10/resident.task10.html',
            controllerAs: 'vm'
        })
        .when('/resident/task11', {
            controller: 'ResidentTask11Controller',
            templateUrl: 'resident/task11/resident.task11.html',
            controllerAs: 'vm'
        })
        .when('/resident/task12', {
            controller: 'ResidentTask12Controller',
            templateUrl: 'resident/task12/resident.task12.html',
            controllerAs: 'vm'
        })
        .when('/resident/task13', {
            controller: 'ResidentTask13Controller',
            templateUrl: 'resident/task13/resident.task13.html',
            controllerAs: 'vm'
        })
        .when('/taskEnd', {
            controller: 'TaskEndController',
            templateUrl: 'taskEnd/taskEnd.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/introduction', {
            controller: 'QuestionnairePart1IntroductionController',
            templateUrl: 'questionnaire/part1/introduction/introduction.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question123', {
            controller: 'QuestionnairePart1Question123Controller',
            templateUrl: 'questionnaire/part1/question123/question123.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question456', {
            controller: 'QuestionnairePart1Question456Controller',
            templateUrl: 'questionnaire/part1/question456/question456.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question789', {
            controller: 'QuestionnairePart1Question789Controller',
            templateUrl: 'questionnaire/part1/question789/question789.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question101112', {
            controller: 'QuestionnairePart1Question101112Controller',
            templateUrl: 'questionnaire/part1/question101112/question101112.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question131415', {
            controller: 'QuestionnairePart1Question131415Controller',
            templateUrl: 'questionnaire/part1/question131415/question131415.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part1/question161718', {
            controller: 'QuestionnairePart1Question161718Controller',
            templateUrl: 'questionnaire/part1/question161718/question161718.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part2/introduction', {
            controller: 'QuestionnairePart2IntroductionController',
            templateUrl: 'questionnaire/part2/introduction/introduction.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part2/question123', {
            controller: 'QuestionnairePart2Question123Controller',
            templateUrl: 'questionnaire/part2/question123/question123.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part2/question456', {
            controller: 'QuestionnairePart2Question456Controller',
            templateUrl: 'questionnaire/part2/question456/question456.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part2/question789', {
            controller: 'QuestionnairePart2Question789Controller',
            templateUrl: 'questionnaire/part2/question789/question789.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part2/question10', {
            controller: 'QuestionnairePart2Question10Controller',
            templateUrl: 'questionnaire/part2/question10/question10.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part3/introduction', {
            controller: 'QuestionnairePart3IntroductionController',
            templateUrl: 'questionnaire/part3/introduction/introduction.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part3/question123', {
            controller: 'QuestionnairePart3Question123Controller',
            templateUrl: 'questionnaire/part3/question123/question123.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part3/question456', {
            controller: 'QuestionnairePart3Question456Controller',
            templateUrl: 'questionnaire/part3/question456/question456.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part3/question789', {
            controller: 'QuestionnairePart3Question789Controller',
            templateUrl: 'questionnaire/part3/question789/question789.html',
            controllerAs: 'vm'
        })
        .when('/questionnaire/part3/question10', {
            controller: 'QuestionnairePart3Question10Controller',
            templateUrl: 'questionnaire/part3/question10/question10.html',
            controllerAs: 'vm'
        })
        .when('/questionnaireEnd', {
            controller: 'QuestionnaireEndController',
            templateUrl: 'questionnaireEnd/questionnaireEnd.html',
            controllerAs: 'vm'
        })
        .when('/emp/loginInfo', {
            controller: 'EMPLoginInfoController',
            templateUrl: 'emp/loginInfo/emp.loginInfo.html',
            controllerAs: 'vm'
        })
        .when('/emp/task1', {
            controller: 'Task1EMPController',
            templateUrl: 'emp/task1/emp.task1.html',
            controllerAs: 'vm'
        })
        .when('/emp/task2', {
            controller: 'Task2EMPController',
            templateUrl: 'emp/task2/emp.task2.html',
            controllerAs: 'vm'
        })
        .when('/emp/task3', {
            controller: 'Task3EMPController',
            templateUrl: 'emp/task3/emp.task3.html',
            controllerAs: 'vm'
        })
        .when('/emp/task4', {
            controller: 'Task4EMPController',
            templateUrl: 'emp/task4/emp.task4.html',
            controllerAs: 'vm'
        })
        .when('/emp/task5', {
            controller: 'Task5EMPController',
            templateUrl: 'emp/task5/emp.task5.html',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/login' });

     /* $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/login');

      // Inject $cookies
      var $cookies;

      angular.injector(['ngCookies']).invoke([
          '$cookies', function (_$cookies)
          {
              $cookies = _$cookies;
          }
      ]);

      $stateProvider

          .state('login', {
              url: '/login',
              // ...
              data: {
                  requireLogin: false
              }
              ,
              views   : {
                  'main@'         : {
                      templateUrl: 'login/login.view.html',
                      controller : 'LoginController as vm'
                  }
              }
          })
          .state('home', {
              url: '/home',
              // ...
              data: {
                  requireLogin: false
              }
              ,
              views   : {
                  'main@'         : {
                      templateUrl: 'home/home.view.html',
                      controller : 'RegisterController as vm'
                  }
              }
          });*/
  }])
      .run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http) {

    // keep user logged in after page refresh
    $rootScope.globalsForTasks = $cookies.getObject('globalsForTasks') || {};
         
    if ($rootScope.globalsForTasks.currentUserForTasks) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globalsForTasks.currentUserForTasks.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      //var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
      var loggedIn = $rootScope.globalsForTasks.currentUserForTasks;
      if (!loggedIn) {
        $location.path('/login');
      }
    });

  }]);
})();
