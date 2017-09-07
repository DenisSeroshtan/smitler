(function () {

  $('.js-h3').each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

  $('.js-h2').each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

})();