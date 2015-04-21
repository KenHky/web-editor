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
    $scope.Developer = function() {
      $scope.editShow = true;
      return $scope.grow = false;
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
          id: 1,
          columns: [[]]
        }, {
          type: "gird66",
          id: 2,
          columns: [[], []]
        }, {
          type: "gird84",
          id: 3,
          columns: [[], []]
        }, {
          type: "gird444",
          id: 4,
          columns: [[], [], []]
        }, {
          type: "gird264",
          id: 5,
          columns: [[], [], []]
        }
      ],
      css: [
        {
          type: "title",
          id: 1
        }, {
          type: "paragraph",
          id: 2
        }, {
          type: "OrderedList",
          id: 3
        }, {
          type: "table",
          id: 4
        }, {
          type: "form",
          id: 5
        }, {
          type: "button",
          id: 5
        }, {
          type: "image",
          id: 5
        }
      ],
      components: [
        {
          type: "ButtonGroups",
          id: 1
        }, {
          type: "ButtonDropdowns",
          id: 2
        }, {
          type: "Navs",
          id: 3
        }, {
          type: "Breadcrumbs",
          id: 4
        }, {
          type: "Pagination",
          id: 5
        }, {
          type: "ProgressBars",
          id: 6
        }, {
          type: "ListGroup",
          id: 7
        }, {
          type: "ResponsiveEmbed",
          id: 8
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

  app.directive("button", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/button.html'
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

  app.directive("ButtonGroups", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/ButtonGroups.html'
    };
  });

  app.directive("ButtonDropdowns", function() {
    return {
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false,
      templateUrl: 'directives/ButtonDropdowns.html'
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
