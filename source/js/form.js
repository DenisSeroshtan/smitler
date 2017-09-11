
(function (){
  $(".input__phone").mask("+7(999) 999-9999");

  $("select").styler({
    selectPlaceholder: "Выберите услугу",
    selectSmartPositioning: false,
    onFormStyled : function () {
      $(".jq-selectbox").addClass("up")
    },
    onSelectOpened: function () {
      // к открытому селекту добавляется обводка
      $(this).css({
        'outline' : '1px solid #BA9856'

      });
      $(this).removeClass("up");
      $(this).addClass("down");


    },
    onSelectClosed: function () {
      // к закрытому селекту добавляется красная обводка
      $(this).css('outline', 'none');

      $(this).removeClass("down");
      $(this).addClass("up");
    }

  })
  $(".form").validate({
    focusCleanup: true,
    focusInvalid: false,
    rules :{
      name : {
        required: true,
        minlength: 3,
        maxlength: 40
      },
      phone : {
        required: true
      },
      услуга : {
        required: true
      }
    },
    messages: {

      name: {
        required: "Это поле обязательно для заполнения",
        minlength: "Имя должно содержать минимум 3 символа",
        maxlength: "Максимальное число символо - 40",
      },

      phone: {
        required: "Это поле обязательно для заполнения"
      },
      услуга : {
        required: ""
      }
    }

  });


})();