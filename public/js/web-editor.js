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
          id: 101,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"],
          columns: [[]]
        }, {
          type: "gird66",
          id: 102,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"],
          columns: [[], []]
        }, {
          type: "gird84",
          id: 103,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"],
          columns: [[], []]
        }, {
          type: "gird444",
          id: 104,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"],
          columns: [[], [], []]
        }, {
          type: "gird264",
          id: 105,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"],
          columns: [[], [], []]
        }
      ],
      css: [
        {
          type: "title",
          id: 201,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "paragraph",
          id: 202,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "OrderedList",
          id: 203,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "table",
          id: 204,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "form",
          id: 205,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "button",
          id: 206,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "image",
          id: 207,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }
      ],
      components: [
        {
          type: "ButtonGroups",
          id: 301,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "ButtonDropdowns",
          id: 302,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "Navs",
          id: 303,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "Breadcrumbs",
          id: 304,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "Pagination",
          id: 305,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "ProgressBars",
          id: 306,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "ListGroup",
          id: 307,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }, {
          type: "ResponsiveEmbed",
          id: 308,
          csstype: ["padding-left", "padding-right", "padding-top", "padding-button"]
        }
      ],
      dropzones: [[]]
    };
    $scope.$watch('models.dropzones', function(model) {
      return $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    $scope.cssSettings = [];
    $scope.newcss = {};
    return $scope.$watch('cssSettings', function() {
      var i, index, len, ref, results, type;
      if ($scope.models.selected) {
        ref = $scope.models.selected.csstype;
        results = [];
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          type = ref[index];
          results.push($scope.newcss[type] = $scope.cssSettings[index]);
        }
        return results;
      }
    });
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
