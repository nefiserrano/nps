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

init();