function modalAjaxForm() {
  $(document).on('submit', '.js-send', function (e) {
    e.preventDefault();

    let formData = new FormData(this);
    let $this = $(this);
    let main_modal = $('#modal-main');
    let method = $this.data('method') || $this.attr('method');
    let action = $this.data('action') || $this.attr('action');

    $.ajax({
      url: action,
      type: method,
      dataType: 'json',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (res) {

      }
    });

    if ($this.attr('data-success')) {
      $.ajax({
        url: $this.attr('data-success'),
        type: method,
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
          main_modal.html(res);
          main_modal.modal('show');
          $this.find('.input-holder').removeClass('correct').find('input, select, textarea').not(':input[type=button], :input[type=submit]').val('').removeClass('has-value');
          $this.find('.rating input').prop('checked', false);
          $this.find('.input-file-holder.added .input-file-remove').trigger('click');
        }
      })
    }

  })
}