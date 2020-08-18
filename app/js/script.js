//fullpage animations
new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
});

//hamburger menu animation
const btnHamburger = document.querySelector("#btnHamburger");
const burger = document.querySelector("#burger");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    burger.classList.remove("active");
  } else {
    btnHamburger.classList.add("open");
    burger.classList.add("active");
  }
});
