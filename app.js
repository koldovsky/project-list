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
      name: 'Andrew Migal',
      subgroup: 1,
      photo: 'images/students/migal_andrew.jpg',
      websiteUrl: 'http://andrewmigal.github.io/Weather1/',
      codeSourceUrl: 'https://github.com/AndrewMigal/Weather1/tree/gh-pages',
      cvUrl: null
  }, {
      name: 'Alexander Krasnovskyy',
      subgroup: 1,
      photo: 'images/students/krasnovskyy_alexander.jpg',
      websiteUrl: 'http://krasnovskyy.github.io/weatherforecast/',
      codeSourceUrl: 'https://github.com/krasnovskyy/weatherforecast/tree/gh-pages',
      cvUrl: 'https://docs.google.com/document/d/1P-HhQaChkt8jXFNpeSUdtIimdfjDXxWfPqrjZ6IBBRM/edit?usp=sharing'
  }, {
      name: 'Maksym Kyrpychnyk',
      subgroup: 1,
      photo: 'images/students/kyrpychnyk_maksym.jpg',
      websiteUrl: 'http://mkirpichnik.github.io/weather/',
      codeSourceUrl: 'https://github.com/mkirpichnik/weather/tree/gh-pages',
      cvUrl: 'https://drive.google.com/file/d/0B-izUUvW5UGSQkVXamZwZ3lXeVk/view?usp=sharing'
  }, {
      name: 'Viacheslav Sadovenko',
      subgroup: 1,
      photo: 'images/students/sadovenko_viacheslav.jpg',
      websiteUrl: 'http://sadovenko.github.io/',
      codeSourceUrl: 'https://github.com/sadovenko/sadovenko.github.io',
      cvUrl: null
  }, {
      name: 'Yuriy Ryzhkov',
      subgroup: 1,
      photo: 'images/students/ryzhkov_yuriy.jpg',
      websiteUrl: 'http://yryzhkov.github.io/forecast/index.html',
      codeSourceUrl: 'https://github.com/yryzhkov/forecast/tree/gh-pages',
      cvUrl: 'https://github.com/yryzhkov/forecast/blob/gh-pages/CV/CV_Yuriy_Ryzhkov.pdf'
  }, {
      name: 'Yuriy Ivanskyi',
      subgroup: 1,
      photo: 'images/students/ivanskyi_yuriy.jpg',
      websiteUrl: 'http://yuraivanskyi.github.io/Cute_Weekly_Forecast',
      codeSourceUrl: 'https://github.com/YuraIvanskyi/Cute_Weekly_Forecast/tree/gh-pages',
      cvUrl: 'https://drive.google.com/open?id=0B04VJIMwNCafLWpWQUgwOV9CMk0'
  }, {
      name: 'Viktorija Malova-Zbyr',
      subgroup: 1,
      photo: 'images/students/malova-zbyr_viktorija.jpg',
      websiteUrl: 'http://vikmz.github.io/myforecastw/index.html',
      codeSourceUrl: 'https://github.com/vikmz/myforecastw/tree/gh-pages',
      cvUrl: 'https://github.com/vikmz/myforecastw/blob/gh-pages/CV'
  }, {
      name: 'Igor Voytovych',
      subgroup: 1,
      photo: 'images/students/voytovych_igor.jpg',
      websiteUrl: 'http://ihorvt.github.io/clouder/',
      codeSourceUrl: 'https://github.com/IhorVT/clouder',
      cvUrl: 'https://ua.linkedin.com/pub/ihor-voytovych/99/5a5/b21'
  }, {
      name: 'Pavlo Kasianchuk',
      subgroup: 1,
      photo: 'images/students/kasianchuk_pavlo.jpg',
      websiteUrl: 'http://kasianchuk.github.io/Weather/',
      codeSourceUrl: 'https://github.com/kasianchuk/Weather/',
      cvUrl: 'https://github.com/kasianchuk/Weather/blob/gh-pages/CV/CV.doc'
  }, {
      name: 'Volodymyr Kornetskyi',
      subgroup: 1,
      photo: 'images/students/kornetskyi_volodymyr.jpg',
      websiteUrl: 'http://volodymyrkor.github.io/Truthful_Weather/',
      codeSourceUrl: 'https://github.com/VolodymyrKor/Truthful_Weather',
      cvUrl: 'https://github.com/VolodymyrKor/Truthful_Weather/blob/gh-pages/files/%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5_%D0%9A%D0%BE%D1%80%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92_%D0%A0.pdf'
  }, {
  // 154.2
      name: 'Dmytro Chaschin',
      subgroup: 2,
      photo: 'images/students/chaschin_dmytro.jpg',
      websiteUrl: 'http://dima-lvov.github.io/WebDimon2/',
      codeSourceUrl: 'https://github.com/dima-lvov/WebDimon2',
      cvUrl: 'https://www.dropbox.com/s/wpq8s6vglccupns/Chaschin%20Dmytro%20CV%20en.docx?dl=0'
  }, {
      name: 'Oleksiy Yarovyy',
      subgroup: 2,
      photo: 'images/students/yarovyy_oleksiy.jpg',
      websiteUrl: 'http://tajmer.github.io/osy',
      codeSourceUrl: 'https://github.com/tajmer/OSY/tree/gh-pages',
      cvUrl: 'https://www.dropbox.com/s/mj0rtbmj78fdcgo/Resume_Eng_Yarovyy.doc?dl=0'
  }, {
      name: 'Marta Dziaruk',
      subgroup: 2,
      photo: 'images/students/dziaruk_marta.jpg',
      websiteUrl: 'http://martdz.github.io/forecast/',
      codeSourceUrl: 'https://github.com/martdz/forecast',
      cvUrl: 'https://github.com/martdz/cv/blob/gh-pages/cv.doc'
  }, {
      name: 'Natalia Kyrulas',
      subgroup: 2,
      photo: 'images/students/kyrulas_natalia.jpg',
      websiteUrl: 'http://kyrulas.github.io/my_weather/',
      codeSourceUrl: 'https://github.com/Kyrulas/my_weather',
      cvUrl: null
  }, {
      name: 'Maria Rosil',
      subgroup: 2,
      photo: 'images/students/rosil_maria.jpg',
      websiteUrl: 'http://mariarosil.github.io/weatherwebsite/',
      codeSourceUrl: 'https://github.com/mariarosil/weatherwebsite/tree/gh-pages',
      cvUrl: null
  }, {
      name: 'Liudmyla Karahodina',
      subgroup: 2,
      photo: 'images/students/karahodina_liudmyla.jpg',
      websiteUrl: 'http://lyudmilaesenina.github.io/WeatherLviv1/',
      codeSourceUrl: 'https://github.com/lyudmilaesenina',
      cvUrl: null
  }, {
      name: 'Iryna Sukanets',
      subgroup: 2,
      photo: 'images/students/sukanets_ira.jpg',
      websiteUrl: 'http://isukanets.github.io/w/',
      codeSourceUrl: 'https://github.com/Isukanets/w',
      cvUrl: null
  }, {
      name: 'Iryna Bohonis',
      subgroup: 2,
      photo: 'images/students/bohonis_iryna.jpg',
      websiteUrl: 'http://ibogonis.github.io/WeatherService/',
      codeSourceUrl: 'https://github.com/ibogonis/WeatherService/tree/gh-pages',
      cvUrl: null
  }, {
      name: 'Bohdan Pakholok',
      subgroup: 2,
      photo: 'images/students/pakholok_bogdan.jpg',
      websiteUrl: 'http://pakholok.github.io/weather/',
      codeSourceUrl: 'https://github.com/Pakholok/weather',
      cvUrl: 'https://github.com/Pakholok/weather/blob/gh-pages/assets/personal%20docs/My%20CV.pdf'
  }, {
      // 154.3
      name: 'Yevheniy Potupa',
      subgroup: 3,
      photo: 'images/students/potupa_yevheniy.jpg',
      websiteUrl: 'http://genyklemberg.github.io/Smilecast',
      codeSourceUrl: 'https://github.com/genyklemberg/Smilecast',
      cvUrl: 'https://github.com/genyklemberg/Smilecast/blob/gh-pages/CV/CV_Y.Potupa.pdf'
  }, {
      name: 'Kornylo Dmytro',
      subgroup: 3,
      photo: 'images/students/kornylo_dmytro.jpg',
      websiteUrl: 'http://kornylo.github.io/weather/',
      codeSourceUrl: 'https://github.com/Kornylo/weather/tree/gh-pages',
      cvUrl: 'https://github.com/Kornylo/weather/tree/gh-pages/CV'
  }, {
      name: 'Khrystyna Kurylas',
      subgroup: 3,
      photo: 'images/students/kurylas_khrystyna.jpg',
      websiteUrl: 'http://khrystynakurylas.github.io/weather',
      codeSourceUrl: 'https://github.com/KhrystynaKurylas/weather/tree/gh-pages',
      cvUrl: 'https://github.com/KhrystynaKurylas/weather/blob/master/CV.pdf'
  }, {
      name: 'Sekret Vadym',
      subgroup: 3,
      photo: 'images/students/secret_vadym.jpg',
      websiteUrl: 'http://sekretvadym.github.io/Weather/',
      codeSourceUrl: 'https://github.com/sekretvadym/Weather/tree/gh-pages',
      cvUrl: 'https://github.com/sekretvadym/Weather/blob/9590559ffaa405d05be13b166c9358c2e102f89f/CV/Curriculum_Vitae_Sekret_eng.pdf'
  }, {
      name: 'Sergij Tokarskij',
      subgroup: 3,
      photo: 'images/students/tokarskij_sergij.jpg',
      websiteUrl: 'http://wawel.github.io/WeatherWawel/',
      codeSourceUrl: 'https://github.com/Wawel/WeatherWawel/tree/gh-pages',
      cvUrl: null
  }, {
      name: 'Ruslan Demus',
      subgroup: 3,
      photo: 'images/students/demus_ruslan.jpg',
      websiteUrl: 'http://demus-r.github.io/weather/',
      codeSourceUrl: 'https://github.com/demus-r/weather/tree/gh-pages',
      cvUrl: 'https://github.com/demus-r/weather/blob/gh-pages/cv_demus_ruslan.pdf'
  }, {
      name: 'Yuriy Muzychyn',
      subgroup: 3,
      photo: 'images/students/muzychyn_yuriy.webp',
      websiteUrl: 'http://yuriysound.github.io/wetherSim/',
      codeSourceUrl: 'https://github.com/Yuriysound/wetherSim',
      cvUrl: 'https://drive.google.com/file/d/0B0fruMdlAEjCZDFXdE9kOFNnZ3c/view'
  }, {
      name: 'Oksana Krychynska',
      subgroup: 3,
      photo: 'images/students/krychynska_oksana.jpg',
      websiteUrl: 'http://krychynska.github.io/weathercheck/index.html',
      codeSourceUrl: 'https://github.com/krychynska/weathercheck/tree/gh-pages',
      cvUrl: null
  }, {
      name: 'Maria Filchagova',
      subgroup: 3,
      photo: 'images/students/filchagova_maria.jpg',
      websiteUrl: 'http://filchagova.github.io/fatality/',
      codeSourceUrl: 'https://github.com/filchagova/fatality/tree/gh-pages',
      cvUrl: 'https://github.com/filchagova/CV/blob/gh-pages/CV_Filchagova.pdf'
  }, {
      name: 'Dmytro Oblovatskyi',
      subgroup: 3,
      photo: 'images/students/oblovatskyi_dmytro.jpg',
      websiteUrl: 'http://alliori.github.io/weather-ver4',
      codeSourceUrl: 'https://github.com/Alliori/weather-ver4/tree/gh-pages',
      cvUrl: 'https://github.com/Alliori/weather-ver4/blob/master/CV.pdf'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);
