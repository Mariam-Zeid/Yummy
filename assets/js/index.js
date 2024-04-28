document.addEventListener("DOMContentLoaded", () => {
  // ?============== Active class in header ==============?
  $(".header .nav-link").click(function (e) {
    $(this).addClass("active");
    $(".nav-link").not(this).removeClass("active");
    const href = $(this).attr("href");
    // Navigate to the specified path
    window.location.href = href;
    e.preventDefault();
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
});
