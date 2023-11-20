function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navmenu.classList.toggle("active");
});

