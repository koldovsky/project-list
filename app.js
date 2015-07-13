var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', '$timeout','$log', function($scope, $mdSidenav, studentService, $timeout, $log) {
  var allStudents = [];
  
  $scope.subgroups = [1,2,3];
  $scope.selectedsubgroups = [1,2,3];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx >-1) {
      list.splice(idx, 1);
    } else {
      list.push(item);
    }
  };
  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };

    $scope.filterBySubgroup = function (student) {
        return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    }

  
  $scope.selected = null;
  $scope.students = allStudents;
  $scope.selectStudent = selectStudent;
  $scope.toggleSidenav = toggleSidenav;
  
  loadStudents();
  
  function loadStudents() {
    studentService.loadAll()
      .then(function(students){
        allStudents = students;
        $scope.students = [].concat(students);
        $scope.selected = $scope.students[0];
      })
  };
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  };
  
  function selectStudent(student) {
    $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
    $scope.toggleSidenav('left');
  };
  
  
  
  
}])


app.service('studentService', ['$q', function($q) {
  //154.1
  var students = [{
      name: 'Yuriy Ryzhkov',
      subgroup: 1,
      photo: 'images/students/ryzhkov_yuriy.jpg',
      websiteUrl: 'http://yryzhkov.github.io/forecast/index.html',
      codeSourceUrl: 'https://github.com/yryzhkov/forecast',
      content: 'My hobby is to create websites'
  }, {
      name: 'Khrystyna Kurylas',
      subgroup: 2,
      photo: 'images/students/kurylas_khrystyna.jpg',
      websiteUrl: 'http://yryzhkov.github.io/forecast/index.html',
      codeSourceUrl: 'https://github.com/yryzhkov/forecast',
      content: 'My hobby is to create websites'
  }, {
      name: 'Yuriy Ryzhkov',
      subgroup: 3,
      photo: 'images/students/ryzhkov_yuriy.jpg',
      websiteUrl: 'http://yryzhkov.github.io/forecast/index.html',
      codeSourceUrl: 'https://github.com/yryzhkov/forecast',
      content: 'My hobby is to create websites'
  }, {
      name: 'Yuriy Ryzhkov',
      subgroup: 1,
      photo: 'images/students/ryzhkov_yuriy.jpg',
      websiteUrl: 'http://yryzhkov.github.io/forecast/index.html',
      codeSourceUrl: 'https://github.com/yryzhkov/forecast',
      content: 'My hobby is to create websites'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);