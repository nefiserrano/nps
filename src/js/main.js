import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner-title">${info.name}</a>
  <p>
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const heroContent = document.querySelector(".hero-content");
heroContent.innerHTML = parkInfoTemplate(parkData);

const pageTitle = document.querySelector("head title");
pageTitle.innerHTML = parkData.fullName;

const heroImage = document.querySelector(".hero img");
heroImage.src = parkData.images[0].url;