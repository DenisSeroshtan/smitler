(function () {
  //E-mail Ajax Send
  $("form.form").submit(function() {
    var $this = $(this),
        activeClass = $this.find(".success"),
        duration = 400;
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: $this.serialize()
    }).done(function() {
      activeClass
        .addClass('active')
        .hide().fadeIn();

      setTimeout(function() {
        activeClass.fadeOut(duration, function () {
          $(this).removeClass('active')
        });
        $this.trigger("reset");
      }, 2000);
    });
    return false;
  });
})();
