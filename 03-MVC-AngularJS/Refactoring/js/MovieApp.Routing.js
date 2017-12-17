angular.module("MovieApp")
.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/details:id", {
			templateUrl: "views/details.htm",
			controller: "DetailsController"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);