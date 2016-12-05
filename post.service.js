(function(){

    function PostService (RestService) {
        /**
         * @name: getAllPosts
         * @description: To get list of all posts from file posts.json 
         */
        this.getAllPosts = function () {
            var sucessCallback = function (response) {
                //console.log(response.plain());
                var dataFromServer = response.plain();
                return dataFromServer;
            }

            var errorCallback = function (error) {
                console.log("error "+ error);
            }
            /* Handle the promise return from Rest Service */
            return RestService.getPosts()
                    .then(sucessCallback, errorCallback)
                    .catch(function (e){
                        console.log(e);
                    });
        }
    }

    angular.module('postapp')
        .service('PostService', ['RestService' ,PostService]);
})();