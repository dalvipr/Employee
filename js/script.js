/**
 * Created by dalvi on 8/3/2016.
 */
var myApp = angular.module("myModule", []);

myApp.controller("myCtrl", ["$scope", function ($scope) {

    $scope.countries = ['USA', 'India'];
    $scope.$watch('country', function (newVal) {

        if (newVal === 'USA')
            $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana Nebraska',
                'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
                'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        if (newVal === 'India')
            $scope.states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
                'Chandigarh', 'Chhattisgarh', 'Delhi', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Goa', 'Gujarat', 'Haryana',
                'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh',
                'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan',
                'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
    });
}]);

/*



var myApp= angular.module('myModule',['angularCountryState']);

   myApp.controller('myCtrl',["$scope",function($scope){
       $scope.onCountryChoosen = function(){

       }
   }]);
*/





