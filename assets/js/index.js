document.addEventListener("DOMContentLoaded", () => {
  // ?============== Active class in header ==============?
  $(".header .nav-link").click(function (e) {
    $(this).addClass("active");
    $(".header .nav-link").not(this).removeClass("active");
  });

  // ?============== Dark and Light Mode ==============?
  const root = document.querySelector(":root");
  const lightTheme = {
    "--color-default": "#212529",
    "--color-secondary": "#37373f",
    "--color-tertiary": "#7f7f90",
    "--primary-hue": "0",
    "--primary-saturation": "84%",
    "--primary-lightness": "44%",
    "--light-hue": "0",
    "--light-saturation": "0%",
    "--light-lightness": "100%",
    "--color-light-grey": "#eee",
  };
  const darkTheme = {
    "--color-default": "#fff",
    "--color-secondary": "#fff",
    "--color-tertiary": "#9f9f9f",
    "--primary-hue": "35",
    "--primary-lightness": "44%",
    "--primary-saturation": "72%",
    "--light-hue": "0",
    "--light-saturation": "0%",
    "--light-lightness": " 9%",
    "--color-light-grey": "#252525",
  };
  const darkModeToggle = document.querySelector("#toggle-mode");
  darkModeToggle.addEventListener("click", () => {
    if (darkModeToggle.checked) {
      for (const [variable, color] of Object.entries(darkTheme)) {
        root.style.setProperty(variable, color);
      }
    } else {
      for (const [variable, color] of Object.entries(lightTheme)) {
        root.style.setProperty(variable, color);
      }
    }
  });

  // ?============== Active wow.js ==============?
  new WOW().init();

  // ?============== counter ==============?
  $(".stats-counter").counterUp({
    delay: 10,
    time: 1500,
  });

  // ?============== Scroll back to the top ==============?
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop != 0) {
      $("#goToTop").fadeIn(500);
      $("#goToTop").css({ display: "flex" });
    } else {
      $("#goToTop").fadeOut(500);
    }
  });
  $("#goToTop").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 200);
  });

  // ?============== Set modal gallery ==============?
  const modalGallery = (tabPane, modalID) => {
    const menuImages = document.querySelectorAll(`#${tabPane} .menu-item .menu-item-img`);
    menuImages.forEach(function (menuImage) {
      menuImage.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        $(`#${modalID} .carousel-item`).removeClass('active');
        $(`#${modalID} .carousel-item`).eq(index).addClass('active');
      });
    });
  }
  // For the Starters tab
  modalGallery('starter-tab-pane', 'starterMenuModal')
  // For the Breakfast tab
  modalGallery('breakfast-tab-pane', 'breakfastMenuModal')
  // For the Lunch tab
  modalGallery('lunch-tab-pane', 'lunchMenuModal')
  // For the Dinner tab
  modalGallery('dinner-tab-pane', 'dinnerMenuModal')
});
