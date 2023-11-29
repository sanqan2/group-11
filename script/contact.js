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
