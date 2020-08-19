const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  console.log("scrolling");
  if (navbar.classList.contains("navbar")) {
    navbar.classList.remove("navbar");
  } else {
    navbar.classList.add("navbar");
  }
});
