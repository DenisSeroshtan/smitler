(function () {

  $('.services-title__top').each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

})();