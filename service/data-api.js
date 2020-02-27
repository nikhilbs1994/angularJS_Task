angular.module('myApp', [])
  .factory('dataService', function ($http) {

    var service = {
      fetchData: fetchData,
      updateData: updateData,
      data: []
    };

    function fetchData() {
      return $http.get("data.json")
      .then(function (response) {
        service.data = response.data.Success;
      });
    }

    function updateData(data, index) {
      service.data[0].name = "Abcdvas";
    }

    return service;
  });