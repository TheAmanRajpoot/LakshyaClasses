lakshyaApp.controller('ContactController', function($scope,$rootScope, $stateParams){
// console.log($stateParams.myData);
$scope.myData = [];
$scope.contact = 'Save';

$scope.contactUs = function(){
    var json = {
        name: $scope.name,
        email: $scope.email,
        message: $scope.message
    }
    $scope.myData.push(json);
}

$scope.edituser = function(index){
    $scope.contact = 'Update';
  var edit=  $scope.myData[index];
  $scope.name=  edit.name;
  $scope.email = edit.email;
  $scope.message = edit.message;
}

})