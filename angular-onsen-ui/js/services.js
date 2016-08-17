/**
 * Created by jduggan on 11/08/2016.
 */
var services = angular.module('app.services', []);

services.factory('userService', ['OAuth', function(OAuth) {
    var userId = null;

    return {
        login: function(username, password){
            var user = {
                username: username,
                password: password
            };
            return OAuth.getAccessToken(user).then(function(response){
                userId = response.data.data[0].user_id
            });
        },
        getUserId: function(){
            return userId;
        }
    };
}]);