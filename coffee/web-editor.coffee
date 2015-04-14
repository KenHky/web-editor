app= angular.module 'myApp', ['ui.bootstrap','ngAnimate','ngDraggable','ngSanitize']
app.controller "MainController",($scope)->
    $scope.editShow= true
    $scope.edit= ()->
        $scope.editShow= true
        $scope.grow= false
    $scope.Preview= ()->
        $scope.editShow= false
        $scope.grow= true 
    $scope.Developer= ()->
        $scope.editShow= true
        $scope.grow= false

    $scope.girdItems = [
        {
            name: "12"
            content: "<div class='col-md-12'>212</div>"
        }
        {
            name: "6 6"
            content: "<div class='col-md-6'>212</div><div class='col-md-6'>212</div>"
        }
        {
            name: "8 4"
            content: "<div class='col-md-8'>212</div><div class='col-md-4'>212</div>"
        }
        {
            name: "4 4 4"
            content: "<div class='col-md-4'>212</div><div class='col-md-4'>212</div><div class='col-md-4'>212</div>"
        }
        {
            name: "2 6 4"
            content: "<div class='col-md-2'>212</div><div class='col-md-6'>212</div><div class='col-md-4'>212</div>"
        }
    ]
    $scope.cssItems = ['title']
    $scope.cssSetting = ['padding']

    $scope.addItem = ()->
        newItemNo = $scope.items.length + 1
        $scope.items.push('Item ' + newItemNo)

    

    $scope.status = 
        oneOpen: true
        fiveOpen: true
        oneDisabled: false
        paddingopen: false
        downloudOpen:false

    #drag
    $scope.centerAnchor = true
    $scope.toggleCenterAnchor = ()->
        $scope.centerAnchor = !$scope.centerAnchor
    $scope.droppedObjects1 = []
    $scope.onDropComplete1= (data,evt)->
        index = $scope.droppedObjects1.indexOf(data)
        if (index == -1)
            $scope.droppedObjects1.push(data)

    $scope.onDragSuccess1= (data,evt)->
        index = $scope.droppedObjects1.indexOf(data)
        if index > -1
            $scope.droppedObjects1.splice(index, 1)
    inArray = (array, obj)->
        index = array.indexOf(obj)


###
app.directive "cssDirective",()->
    restrict: 'EA'
    transclude: true
    scope:
      type:"="
    templateUrl: '../directives/cssSetting.html'
###