Template.postsByAuthor.helpers({
  //posts: postsData
  posts: function() {
    return Posts.find({author:this.author});
  }
});