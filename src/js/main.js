import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import "../css/style.css";
import "../css/home.css";

function setParkIntro(data) {
  const introSection = document.querySelector(".intro");
  introSection.innerHTML = `<h1>${data.fullName}</h1>`;
  introSection.innerHTML += `<p>${data.description}</p>`;
}

function setParkInfo(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo(links);
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if ev.target is the button or something inside the button
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
      // if we opened it then set the aria-expanded attribute to true
      target.setAttribute("aria-expanded", true);
    } else {
      // if we closed it then set the aria-expanded attribute to false
      target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
  });
}

init();
enableNavigation();