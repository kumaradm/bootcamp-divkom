window.console = window.console || function (t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
    document.getElementById("logo-ig").src = "./files/logo-ig-white.png";
    document.getElementById("logo-github").src = "./files/logo-github-white.png";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("logo-ig").src = "./files/logo-ig.png";
    document.getElementById("logo-github").src = "./files/logo-github.png";
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
