Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

// This runs Holder after postItem renders so that placeholder thumbnails display
Template.postItem.rendered = function() {
  return Holder.run();
};