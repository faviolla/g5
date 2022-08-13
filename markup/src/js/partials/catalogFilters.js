function filterToggle() {
  let $body = $('body'),
      $bg = $('.bg');

  $(document).on('click', '.filters-toggle, .js-filter', function() {

    if($body.hasClass('filters-opened')) {
      $body.removeClass('filters-opened');
      $bg.removeClass('active');
    } else {
      $body.addClass('filters-opened');
      $bg.addClass('active');
    }
  })

  $(document).on('click', '.js-close-filters, .filters-opened .bg', function () {
    // $('.filters').removeClass('opened');
    $bg.removeClass('active');
    $body.removeClass('filters-opened');
  })
}

function toggleFilterItem() {
  $(document).on('click', '.js-filter-toggle', function () {
    if ($(this).parents('.filter-item').hasClass('filter-active')) {
      $(this).parents('.filter-item').removeClass('filter-active')
    } else {
      $(this).parents('.filter-item').addClass('filter-active')
    }
  })
}

function priceSlider() {
  let input_0 = $('.price_0'),
    input_1 = $('.price_1'),
    rangeMinValue = input_0.data('original-value'),
    rangeMaxValue = input_1.data('original-value'),
    slider_track = $('.mse2_number_slider');

  $('.mse2_number_slider').slider({
    range: true,
    min: rangeMinValue,
    max: rangeMaxValue,
    values: [rangeMinValue, rangeMaxValue],
    slide: function (event, ui) {
      input_0.val(ui.values[0]);
      input_1.val(ui.values[1]);
    }
  })

  input_0.change(function () {
    var val1 = input_0.val(),
      val2 = input_1.val();

    if (parseInt(val1) > parseInt(val2)) {
      val1 = val2;
      input_0.val(val1);
    }
    slider_track.slider('values', 0, val1);
  });

  input_1.change(function () {
    var val1 = input_0.val(),
      val2 = input_1.val();

    if (parseInt(val2) > rangeMaxValue) {
      input_1.val(rangeMaxValue);
    }
    if (val1 < 0) {
      input_0.val(val1);
    }
    if (parseInt(val1) > parseInt(val2)) {
      val2 = val1;
      input_1.val(val2);
    }
    slider_track.slider('values', 1, val2);
  })
}