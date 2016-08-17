/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', ['$scope', 'userService', function($scope, userService) {
    $scope.showPage = function(page){
        $scope.pageNavigator.pushPage(page, {animation: "lift"});
    };
	
	$scope.showDetail = function(){
        $scope.showPage('components/common/detail.html');
    };
}]);