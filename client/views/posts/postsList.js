var postsData = [
  
  {
    title: "Running Lean",
    author: "Ash Maurya",
    url: "http://runninglean.com"
  },
  {
    title: "Discover Meteor",
    author: "Tom Coleman",
    url: "http://discovermeteor.com"
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    url: "http://thegivermovie.com"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    url: "http://google.com.com"
  },
  {
    title: "The Lion, The Witch and The Wardrobe",
    author: "C.S. Lewis",
    url: "http://disneychannel.com"
  }
  
];

Template.postsList.helpers({
  //posts: postsData
  posts: function() {
    return Posts.find({},{sort:{likes:-1, title:1}});
  }
});