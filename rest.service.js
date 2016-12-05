(function () {
    function RestService(Restangular) {

        var PostBaseUrl = Restangular.all('posts');
        /**
         * to get post data from server through Restangular
         */
        this.getPosts = function () {
            return PostBaseUrl.getList(); // Restangular always returns a promise
        }
    }
    angular.module('postapp')
        .service('RestService', ['Restangular', RestService]);

})();