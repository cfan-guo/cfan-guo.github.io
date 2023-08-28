let body = document.body;
let darkmodeText = document.querySelector("#darkmode-text");

if (localStorage.getItem("dark")) {
  body.classList.add("dark");
  darkmodeText.innerHTML = "light mode";
}

function toggleTheme() {
  let darkMode = localStorage.getItem("dark");

  if (darkMode) {
    body.classList.remove("dark");
    localStorage.removeItem("dark");
    darkmodeText.innerHTML = "dark mode";
  } else {
    body.classList.add("dark");
    localStorage.setItem("dark", true);
    darkmodeText.innerHTML = "light mode";
  }
}
