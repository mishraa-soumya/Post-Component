(function () {

    function PostCtrl (PostService) {
        var self      = this;
        self.allPosts = '';
        self.$onInit = function () {
            PostService.getAllPosts().then(function (result) {
                self.allPosts = result;
                //console.log(self.allPosts);
            });
        }
        
    }

    var post = {
        controller: ['PostService', PostCtrl],
        //controllerAs: 'posts',
        template: function ($element, $attrs) {
            return `
                    <div class="posts">
                        <ul class="post_list">
                            <li ng-repeat="post in $ctrl.allPosts" id="post.id">
                                <h3>{{ post.title }}</h3>
                                <div class="post_contents">
                                    <p>{{ post.description }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>       
                    `
        }
    }

    angular.module('postapp')
        .component('posts', post);
})();