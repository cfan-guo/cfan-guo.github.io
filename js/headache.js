const marquees = document.getElementsByTagName("marquee");
const reducedMovement = localStorage.getItem("reduced-movement");

if (reducedMovement) {
  Array.from(marquees).forEach((el) => el.classList.add("hidden"));
}

document.getElementById("banners-toggle").onclick = function () {
  Array.from(marquees).forEach((el) => el.classList.toggle("hidden"));

  if (reducedMovement) {
    localStorage.removeItem("reduced-movement");
  } else {
    localStorage.setItem("reduced-movement", true);
  }
};
