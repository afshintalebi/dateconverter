app.controller('typeController', function($scope) {
    $scope.gotoPage = function (page,params) {
        if(!params || params == 'undefined')
            params={};
        navConvertor.pushPage(page,params);
    }
});