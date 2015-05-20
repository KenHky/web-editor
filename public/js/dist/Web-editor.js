/*! Web-editor - v0.0.1 - 2015-05-18
* Copyright (c) 2015 Ken; Licensed  */
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
          id: 110,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[]]
        }, {
          type: "gird66",
          id: 120,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], []]
        }, {
          type: "gird84",
          id: 130,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], []]
        }, {
          type: "gird444",
          id: 140,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          },
          columns: [[], [], []]
        }, {
          type: "gird264",
          id: 150,
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
          id: 210,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "paragraph",
          id: 220,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "OrderedList",
          id: 230,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "table",
          id: 240,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "form",
          id: 250,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "button",
          id: 260,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "image",
          id: 270,
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
          type: "navBar",
          id: 390,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "bottomGroups",
          id: 310,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "bottomDropdowns",
          id: 320,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Navs",
          id: 330,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Breadcrumbs",
          id: 340,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "Pagination",
          id: 350,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ProgressBars",
          id: 360,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ListGroup",
          id: 370,
          csstype: {
            "padding-left": "",
            "padding-right": "",
            "padding-top": "",
            "padding-bottom": ""
          }
        }, {
          type: "ResponsiveEmbed",
          id: 380,
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
    $scope.$watch('models.dropzones', function(model) {
      return $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    $scope.downloadCon = function() {
      var blob, zone;
      zone = JSON.stringify($scope.models.dropzones);
      blob = new Blob([zone], {
        type: "text/plain;charset=utf-8"
      });
      return saveAs(blob, "config.txt");
    };
    $scope.downloadHtm = function() {
      var blob, htmls, innerhtml;
      innerhtml = document.getElementById("dropzone").innerHTML;
      htmls = "<!DOCTYPE html><html lang='zh-CN'><head><title>new page</title><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css'><style type='text/css'>li{list-style-type:none;}*{padding: 0px;margin: 0px;}</style></head><body>" + innerhtml + "</body></html>";
      blob = new Blob([htmls], {
        type: "text/html;charset=utf-8"
      });
      return saveAs(blob, "new-page.html");
    };
    return $scope.clear = function() {
      return $scope.models.dropzones = [[]];
    };
  });


  /*
  app.directive "gird12",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/gird12.html'
  
  app.directive "list",()->
      replace: false
      restrict: 'A'
      transclude: false
      scope: false
      templateUrl: 'directives/list.html'
  
  app.directive "gird264",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/gird264.html'
  
  app.directive "gird444",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/gird444.html'
  
  app.directive "gird66",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/gird66.html'
  
  app.directive "gird84",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/gird84.html'
  
  app.directive "title",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/title.html'
  
  app.directive "paragraph",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/paragraph.html'
  
  app.directive "OrderedList",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/OrderedList.html'
  
  app.directive "table",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/table.html'
  
  app.directive "form",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/form.html'
  
  app.directive "bottom",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/bottom.html'
  
  app.directive "image",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/image.html'
  
  app.directive "navBar",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/navBar.html'
  
  app.directive "bottomGroups",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/bottomGroups.html'
  
  app.directive "bottomDropdowns",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/bottomDropdowns.html'
  
  app.directive "Navs",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/Navs.html'
  
  app.directive "Breadcrumbs",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/Breadcrumbs.html'
  
  app.directive "Pagination",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/Pagination.html'
  
  app.directive "ProgressBars",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/ProgressBars.html'
  
  app.directive "ListGroup",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/ListGroup.html'
  
  app.directive "ResponsiveEmbed",()->
      replace: false,
      transclude: false,
      restrict: 'A',
      scope: false 
      templateUrl: 'directives/ResponsiveEmbed.html'
   */

}).call(this);
