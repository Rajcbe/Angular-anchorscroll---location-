var app=angular.module("anchor",[])
        .controller("myctrl",function ($scope,$location,$anchorScroll) {
	     $scope.scrollTo=function(a){
	     	$location.hash(a);
	     	$anchorScroll.yOffset=20;
	     	$anchorScroll();
	     }
});