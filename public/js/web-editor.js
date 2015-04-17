(function() {
  var app;

  app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate', 'ngDraggable', 'ngSanitize', 'dndLists']);

  app.controller("MainController", function($scope) {
    var inArray;
    $scope.editShow = true;
    $scope.edit = function() {
      $scope.editShow = true;
      return $scope.grow = false;
    };
    $scope.Preview = function() {
      $scope.editShow = false;
      return $scope.grow = true;
    };
    $scope.Developer = function() {
      $scope.editShow = true;
      return $scope.grow = false;
    };
    $scope.girdItems = [
      {
        name: "12",
        content: "<div class='col-md-12'>212</div>"
      }, {
        name: "6 6",
        content: "<div class='col-md-6'>212</div><div class='col-md-6'>212</div>"
      }, {
        name: "8 4",
        content: "<div class='col-md-8'>212</div><div class='col-md-4'>212</div>"
      }, {
        name: "4 4 4",
        content: "<div class='col-md-4'>212</div><div class='col-md-4'>212</div><div class='col-md-4'>212</div>"
      }, {
        name: "2 6 4",
        content: "<div class='col-md-2'>212</div><div class='col-md-6'>212</div><div class='col-md-4'>212</div>"
      }
    ];
    $scope.cssItems = ['title'];
    $scope.cssSetting = ['padding'];
    $scope.addItem = function() {
      var newItemNo;
      newItemNo = $scope.items.length + 1;
      return $scope.items.push('Item ' + newItemNo);
    };
    $scope.status = {
      oneOpen: true,
      fiveOpen: true,
      oneDisabled: false,
      paddingopen: false,
      downloudOpen: false
    };
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function() {
      return $scope.centerAnchor = !$scope.centerAnchor;
    };
    $scope.droppedObjects1 = [];
    $scope.onDropComplete1 = function(data, evt) {
      var index;
      index = $scope.droppedObjects1.indexOf(data);
      if (index === -1) {
        return $scope.droppedObjects1.push(data);
      }
    };
    $scope.onDragSuccess1 = function(data, evt) {
      var index;
      index = $scope.droppedObjects1.indexOf(data);
      if (index > -1) {
        return $scope.droppedObjects1.splice(index, 1);
      }
    };
    inArray = function(array, obj) {
      var index;
      return index = array.indexOf(obj);
    };
    $scope.models = {
      selected: null,
      templates: [
        {
          type: "gird12",
          id: 1,
          columns: []
        }, {
          type: "gird66",
          id: 2,
          columns: [[], []]
        }, {
          type: "gird84",
          id: 2,
          columns: [[], []]
        }, {
          type: "gird444",
          id: 2,
          columns: [[], [], []]
        }, {
          type: "gird264",
          id: 2,
          columns: [[], [], []]
        }
      ],
      dropzones: [
        [
          {
            "type": "gird12",
            "id": 1,
            "columns": [
              [
                {
                  "type": "gird12",
                  "id": "1",
                  "columns": []
                }, {
                  "type": "gird12",
                  "id": "3",
                  "columns": []
                }
              ]
            ]
          }
        ]
      ]
    };
    return $scope.$watch('models.dropzones', function(model) {
      return $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  });

  app.directive("gird12", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/gird12.html'
    };
  });

  app.directive("list", function() {
    return {
      replace: false,
      restrict: 'A',
      transclude: false,
      scope: false,
      templateUrl: 'directives/list.html'
    };
  });

}).call(this);
