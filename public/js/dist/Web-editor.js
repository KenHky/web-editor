/*! Web-editor - v0.0.1 - 2015-04-14
* Copyright (c) 2015 Ken; Licensed  */
(function() {
  var app;

  app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate', 'ngDraggable', 'ngSanitize']);

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
    return inArray = function(array, obj) {
      var index;
      return index = array.indexOf(obj);
    };
  });


  /*
  app.directive "cssDirective",()->
      restrict: 'EA'
      transclude: true
      scope:
        type:"="
      templateUrl: '../directives/cssSetting.html'
   */

}).call(this);
