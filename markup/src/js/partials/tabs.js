function initTabs() {
  $(document).on('click', '[data-tab]', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    $(this)
      .parents('.tab-holder')
      .find('[data-content=' + $(this).data('tab') + ']')
      .addClass('active')
      .siblings('[data-content]')
      .removeClass('active');
    // $('.product-slider').length > 0 && productSlider();
  });
}
