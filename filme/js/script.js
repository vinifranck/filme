angular.module('blogFilme', []);
angular.module('blogFilme').controller('Rest', function ($scope, $http){
  $http.get('https://api.themoviedb.org/3/movie/popular?api_key=c7d734f23946a9a042d3ffd19416fa5f&language=pt-BR').
      success(function(data) {
          data = data.results;
          $scope.movies = data;
          $scope.linha = function (index) {
            window["num"] = index;
            localStorage.setItem("ali", num);
        };
      }
  );
});
angular.module('filme', []);
angular.module('filme').controller('filminho', function ($scope, $http){
  $http.get('https://api.themoviedb.org/3/movie/popular?api_key=c7d734f23946a9a042d3ffd19416fa5f&language=pt-BR').
      success(function(data) {
          data = data.results;
          $scope.movies = data[localStorage.getItem("ali")];
      }
  );
});