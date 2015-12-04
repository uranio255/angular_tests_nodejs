/* global customersService angular */
(function() {
    var customersService = function($http) {

        this.getCustomers = function() {
            return $http.get('/customers');
        };
        
        this.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
    };
    
    customersService.$inject = ['$http'];
    
    angular.module('customersApp').service('customersService', customersService);
})();
