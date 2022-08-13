$(document).ready(function () {
  languageToggle();
  catalogToggle();
  basketToggle();
  $('[data-tab]').length > 0 && initTabs();
  $('.select-dropdown-holder').length > 0 && selectDropdown();
  $('.filters-toggle').length > 0 && filterToggle();
  $('.js-filter-toggle').length > 0 && toggleFilterItem();
  $('.mse2_number_slider').length > 0 && priceSlider();
  initModal();
  $('.js-input-phone').length > 0 && $('.js-input-phone').mask('+380 99 999 99 99');
  $('.input').length > 0 && initInputValue();
  $('.form_validate').formValidation();
  $('.js-send').length > 0 && modalAjaxForm();
  $('.dropdown-list-toggle').length > 0 && dropdownList();
})

$(window).on('resize', function () {
  let windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

  if (windowWidth < 1440) {
    mobileMenu();
  }

}).trigger('resize');

function languageToggle() {
  $(document).on('click', '.language-toggle', function(e) {
    e.preventDefault();

    let $this = $(this),
        parent = $this.parents('.language');
    if (parent.hasClass('opened')) {
      parent.removeClass('opened')
    } else {
      parent.addClass('opened')
    }
  })
  $(document).mouseup(function (e) {
    let div = $('.language');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('opened');
    }
  });
}

function selectDropdown () {
  $(document).on('click', '.js-select-toggle', function() {
    let $this = $(this),
        $parent = $this.parents('.select-dropdown-holder');

    if ($parent.hasClass('opened')) {
      $parent.removeClass('opened');
    } else {
      $parent.addClass('opened');
    }
  })

  $(document).on('click', '.js-select-item span', function() {
    let $this = $(this),
    $parent = $this.parents('.select-dropdown-holder'),
    toggleTitle = $parent.find('.js-select-toggle'),
    text = $this.text();

    toggleTitle.text(text);
    $parent.removeClass('opened');
  })

  $(document).mouseup(function (e) {
    let div = $('.select-dropdown-holder');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('opened');
    }
  });
}

function initInputValue() {
  $('.input').each(function () {
    $(this).on('blur input', inputHasValue);
  });
  $('.input').each(inputHasValue);
}
function inputHasValue() {
  $(this).val() != '' ? $(this).addClass('has-value') : $(this).removeClass('has-value');
}

function catalogToggle() {
  let $body = $('body'),
      $bg = $('.bg');

  $(document).on('click', '.js-catalog-toggle', function(e) {
    e.preventDefault();

    if ($body.hasClass('opened-catalog')) {
      $body.removeClass('opened-catalog');
      $bg.removeClass('active');
    } else {
      $body.removeClass('opened-basket');
      $body.addClass('opened-catalog');
      $bg.addClass('active');
    }

  })
  $(document).on('click', '.opened-catalog .bg', function () {
    $bg.removeClass('active');
    $body.removeClass('opened-catalog');
  })
}

function mobileMenu() {
  $(document).on('click', '.mobile-menu .submenu-section a', function (e) {
    e.preventDefault();
    $(this).siblings('.submenu').addClass('active');
  })
  $(document).on('click', '.mobile-menu .back', function () {
    $(this).closest('.submenu').removeClass('active');
  })
}

function basketToggle() {
  $(document).on('click', '.basket-toggle', function (e) {
    e.preventDefault();
    let $body = $('body'),
        $bg = $('.bg');

    if ($body.hasClass('opened-basket')) {
      $body.removeClass('opened-basket');
    } else {
      $body.removeClass('opened-catalog');
      $bg.removeClass('active');
      $body.addClass('opened-basket');
    }
  })
}

function dropdownList() {
  $(document).on('click', '.dropdown-list-toggle', function(e) {
    e.preventDefault();

    let $this = $(this),
        $parent = $this.closest('.dropdown-block');

    if ($parent.hasClass('opened')) {
      $parent.removeClass('opened');
    } else {
      $('.dropdown-block').removeClass('opened');
      $parent.addClass('opened');
    }

    $(document).mouseup(function (e) {
      let div = $('.dropdown-block');
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('opened');
      }
    });

  })
}