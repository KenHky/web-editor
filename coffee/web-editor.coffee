app= angular.module 'myApp', ['ui.bootstrap','ngAnimate','ngSanitize','dndLists']
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

    $scope.models = 
        selected: null,
        girds: [
            type: "gird12"
            id: 1
            columns: [[]]
        ,
            type: "gird66"
            id: 2
            columns: [[], []]
        ,
            type: "gird84"
            id: 3
            columns: [[], []]
        ,
            type: "gird444"
            id: 4
            columns: [[], [], []]
        ,
            type: "gird264"
            id: 5
            columns: [[], [], []]
        ]
        css: [
            type: "title"
            id: 1
        ,
            type: "paragraph"
            id: 2
        ,
            type: "OrderedList"
            id: 3
        ,
            type: "table"
            id: 4
        ,
            type: "form"
            id: 5
        ,
            type: "button"
            id: 5
        ,
            type: "image"
            id: 5
        ]
        components:[
            type: "ButtonGroups"
            id: 1
        ,
            type: "ButtonDropdowns"
            id: 2
        ,
            type: "Navs"
            id: 3
        ,
            type: "Breadcrumbs"
            id: 4
        ,
            type: "Pagination"
            id: 5
        ,
            type: "ProgressBars"
            id: 6
        ,
            type: "ListGroup"
            id: 7
        ,
            type: "ResponsiveEmbed"
            id: 8
        ]
        dropzones:[
            [
                
            ]
        ]

    $scope.$watch 'models.dropzones', (model)->
        $scope.modelAsJson = angular.toJson model, true
    , true


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

app.directive "button",()->
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false 
    templateUrl: 'directives/button.html'

app.directive "image",()->
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false 
    templateUrl: 'directives/image.html'

app.directive "ButtonGroups",()->
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false 
    templateUrl: 'directives/ButtonGroups.html'

app.directive "ButtonDropdowns",()->
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false 
    templateUrl: 'directives/ButtonDropdowns.html'

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

