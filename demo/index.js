$.fn.initializeEach = function(selector, callback) {
  this
    .on('replace:done', function(event) {
      $(event.target).find(selector).addBack(selector).each(callback);
    })
    .find(selector).each(callback);
};

$(document).initializeEach('.replace-onload', function() {
  var $this = $(this);
  $this.ajaxReplace($this.data('href'));
});
