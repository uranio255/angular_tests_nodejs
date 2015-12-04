(function() {
    
    var OrdersController = function ($scope, $routeParams, customersService) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
            //Search the customers for the customerId
            customersService.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                });
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());
