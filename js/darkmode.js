const body = document.body;
const darkmodeText = document.querySelector("#darkmode-text");
const localDark =
  localStorage.getItem("theme") && localStorage.getItem("theme") === "dark";
const initialSystemDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  (!localStorage.getItem("theme") || localDark);

// annoyingly enough, things don't stick if I just set it as dark true/false
// hence the "dark"/"light"

function darken(setLocal = false) {
  body.classList.add("dark");
  darkmodeText.innerHTML = "light mode";

  if (setLocal) {
    localStorage.setItem("theme", "dark");
  }
}

function lighten(setLocal = false) {
  body.classList.remove("dark");
  darkmodeText.innerHTML = "dark mode";

  if (setLocal) {
    localStorage.setItem("theme", "light");
  }
}

// check on initial site visit if user has previously set theme
// or has a colour scheme via OS
// we'll match their system settings as long as they don't touch the toggle
if (initialSystemDark || localDark) {
  darken();
}

function toggleTheme() {
  const localDark =
    localStorage.getItem("theme") && localStorage.getItem("theme") === "dark";
  const initialSystemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    (!localStorage.getItem("theme") || localDark);
  const darkMode = localDark || initialSystemDark;

  if (darkMode) {
    lighten(true);
  } else {
    darken(true);
  }
}
