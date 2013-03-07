// Generated by CoffeeScript 1.3.3
(function() {
  var submitKey;

  submitKey = function() {
    var key;
    key = $('input.key-input').val();
    if (key === '') {
      return;
    }
    return $.post('/unlock', {
      key: key
    }, function(data) {
      var newClass, text;
      if (data === 'correct') {
        newClass = 'label-success';
      } else {
        newClass = 'label-warning';
      }
      if (data === 'correct') {
        text = 'welcome';
      } else {
        text = 'gtfo';
      }
      $("span.message-container").text(text);
      $("span.message-container").removeClass('.label-success.label-warning').addClass(newClass);
      return $("span.message-container").show();
    });
  };

  $(function() {
    $('.btn.btn-key').on('click', function() {
      return $('input.key-input').val($('input.key-input').val() + $(this).text());
    });
    $('form.key-form').on('submit', function(ev) {
      ev.preventDefault();
      return submitKey();
    });
    return $('.btn.btn-enter').on('click', function() {
      return submitKey();
    });
  });

}).call(this);