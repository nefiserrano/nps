import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

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

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfo(parkInfoLinks);