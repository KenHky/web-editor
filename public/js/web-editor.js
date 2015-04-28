(function() {
  var app;

  app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'dndLists']);

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
      girds: [
        {
          type: "gird12",
          id: 101,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[]]
        }, {
          type: "gird66",
          id: 102,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], []]
        }, {
          type: "gird84",
          id: 103,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], []]
        }, {
          type: "gird444",
          id: 104,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], [], []]
        }, {
          type: "gird264",
          id: 105,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], [], []]
        }
      ],
      css: [
        {
          type: "title",
          id: 201,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "paragraph",
          id: 202,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "OrderedList",
          id: 203,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "table",
          id: 204,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "form",
          id: 205,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "bottom",
          id: 206,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "image",
          id: 207,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }
      ],
      components: [
        {
          type: "bottomGroups",
          id: 301,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "bottomDropdowns",
          id: 302,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Navs",
          id: 303,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Breadcrumbs",
          id: 304,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Pagination",
          id: 305,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ProgressBars",
          id: 306,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ListGroup",
          id: 307,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ResponsiveEmbed",
          id: 308,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }
      ],
      dropzones: [[]]
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

  app.directive("gird264", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/gird264.html'
    };
  });

  app.directive("gird444", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/gird444.html'
    };
  });

  app.directive("gird66", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/gird66.html'
    };
  });

  app.directive("gird84", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/gird84.html'
    };
  });

  app.directive("title", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/title.html'
    };
  });

  app.directive("paragraph", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/paragraph.html'
    };
  });

  app.directive("OrderedList", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/OrderedList.html'
    };
  });

  app.directive("table", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/table.html'
    };
  });

  app.directive("form", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/form.html'
    };
  });

  app.directive("bottom", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/bottom.html'
    };
  });

  app.directive("image", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/image.html'
    };
  });

  app.directive("bottomGroups", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/bottomGroups.html'
    };
  });

  app.directive("bottomDropdowns", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/bottomDropdowns.html'
    };
  });

  app.directive("Navs", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/Navs.html'
    };
  });

  app.directive("Breadcrumbs", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/Breadcrumbs.html'
    };
  });

  app.directive("Pagination", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/Pagination.html'
    };
  });

  app.directive("ProgressBars", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/ProgressBars.html'
    };
  });

  app.directive("ListGroup", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/ListGroup.html'
    };
  });

  app.directive("ResponsiveEmbed", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/ResponsiveEmbed.html'
    };
  });

}).call(this);
