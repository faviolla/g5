/* modals */
function initModal() {
  let main_modal = $('#modal-main');

  // modal closing
  main_modal.on('hidden.bs.modal', function () { });

  // modal showing
  main_modal.on('show.bs.modal', function () {
    centerModal(main_modal);
    $('.js-input-phone').length > 0 && $('.js-input-phone').mask('+380 99 999 99 99');
    $('.form_validate').formValidation();
    $('.input').length > 0 && initInputValue();
    $('.js-send').length > 0 && modalAjaxForm();
    // $('.js-password').length > 0 && showPassword();
    // $('.select').styler();
    $('.tab-holder').length > 0 && initTabs();
  });

  // bg clicking
  $(document).on('click', '.modal-backdrop', function () { });

  $(document).on('click', '[data-openmodal]', function (e) {
    e.preventDefault();
    var link = $(this).data('openmodal');

    main_modal.load(link, function () {
      main_modal.modal('show');
    });
  });
}

function centerModal(modalBox) {
  if (modalBox === undefined) {
    modalBox = $('#modal-main');
  }

  var wrapper = $('body'),
    modalDialog = modalBox.find('.modal-dialog'),
    widthMain = wrapper.outerWidth(),
    widthModal = modalDialog.find('.modal-content').outerWidth(),
    centerDistance = (widthMain - widthModal) / 2,
    centerVertical = ($(window).outerHeight() - modalDialog.outerHeight()) / 2;

  modalDialog.css('margin-left', centerDistance + 'px');

  if (centerVertical > 0) {
    modalDialog.css('margin-top', centerVertical + 'px');
  } else {
    modalDialog.css('margin-top', '0');
  }

  $(window).resize(function () {
    var modalDialog = modalBox.find('.modal-dialog'),
      widthMain = wrapper.outerWidth(),
      widthModal = modalDialog.find('.modal-content').outerWidth(),
      centerDistance = (widthMain - widthModal) / 2;

    modalDialog.css('margin-left', centerDistance + 'px');

  });
}