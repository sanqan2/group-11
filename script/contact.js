//Hidden div
document.getElementById("redbtn").addEventListener("click", displaytheDiv);

function displaytheDiv() {
  var x = document.getElementById("hiddendiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Menu
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
