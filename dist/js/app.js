const logoName = document.getElementById("logo-name");
const body = document.querySelector("body");
const navbar = document.querySelector("nav");


      // Paper plane animation
      // Credit: https://codepen.io/aaroniker/pen/BajabVN
      document.querySelectorAll(".btn-email").forEach((button) => {
        let getVar = (variable) =>
          getComputedStyle(button).getPropertyValue(variable);

        if (!button.classList.contains("active")) {
          button.classList.add("active");

          gsap.to(button, {
            keyframes: [
              {
                "--left-wing-first-x": 50,
                "--left-wing-first-y": 100,
                "--right-wing-second-x": 50,
                "--right-wing-second-y": 100,
                duration: 0.2,
                onComplete() {
                  gsap.set(button, {
                    "--left-wing-first-y": 0,
                    "--left-wing-second-x": 40,
                    "--left-wing-second-y": 100,
                    "--left-wing-third-x": 0,
                    "--left-wing-third-y": 100,
                    "--left-body-third-x": 40,
                    "--right-wing-first-x": 50,
                    "--right-wing-first-y": 0,
                    "--right-wing-second-x": 60,
                    "--right-wing-second-y": 100,
                    "--right-wing-third-x": 100,
                    "--right-wing-third-y": 100,
                    "--right-body-third-x": 60,
                  });
                },
              },
              {
                "--left-wing-third-x": 20,
                "--left-wing-third-y": 90,
                "--left-wing-second-y": 90,
                "--left-body-third-y": 90,
                "--right-wing-third-x": 80,
                "--right-wing-third-y": 90,
                "--right-body-third-y": 90,
                "--right-wing-second-y": 90,
                duration: 0.2,
              },
              {
                "--rotate": 50,
                "--left-wing-third-y": 95,
                "--left-wing-third-x": 27,
                "--right-body-third-x": 45,
                "--right-wing-second-x": 45,
                "--right-wing-third-x": 60,
                "--right-wing-third-y": 83,
                duration: 0.25,
              },
              {
                "--rotate": 60,
                "--plane-x": -8,
                "--plane-y": 40,
                duration: 0.2,
              },
              {
                "--rotate": 40,
                "--plane-x": 45,
                "--plane-y": -300,
                "--plane-opacity": 0,
                duration: 0.375,
                onComplete() {
                  setTimeout(() => {
                    button.removeAttribute("style");
                    gsap.fromTo(
                      button,
                      {
                        opacity: 0,
                        y: -8,
                      },
                      {
                        opacity: 1,
                        y: 0,
                        clearProps: true,
                        duration: 0.3,
                        onComplete() {
                          button.classList.remove("active");
                        },
                      }
                    );
                  }, 1800);
                },
              },
            ],
          });

          gsap.to(button, {
            keyframes: [
              {
                "--text-opacity": 0,
                "--border-radius": 0,
                "--left-wing-background": getVar("--primary-dark"),
                "--right-wing-background": getVar("--primary-dark"),
                duration: 0.11,
              },
              {
                "--left-wing-background": getVar("--primary"),
                "--right-wing-background": getVar("--primary"),
                duration: 0.14,
              },
              {
                "--left-body-background": getVar("--primary-dark"),
                "--right-body-background": getVar("--primary-darkest"),
                duration: 0.25,
                delay: 0.1,
              },
              {
                "--trails-stroke": 171,
                duration: 0.22,
                delay: 0.22,
              },
              {
                "--success-opacity": 1,
                "--success-x": 0,
                duration: 0.2,
                delay: 0.15,
              },
              {
                "--success-stroke": 0,
                duration: 0.15,
              },
            ],
          });
        }
      });

// Back to top arrow button

const backToTopBtn = $("#backToTopBtn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    backToTopBtn.addClass("show");
  } else {
    backToTopBtn.removeClass("show");
  }
});

backToTopBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

