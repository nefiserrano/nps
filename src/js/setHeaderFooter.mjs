import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  const heroContent = document.querySelector(".hero-content");
  heroContent.innerHTML = parkInfoTemplate(data);
  
  const pageTitle = document.querySelector("head title");
  pageTitle.textContent = data.fullName;
  
  const heroImage = document.querySelector(".hero img");
  heroImage.src = data.images[0].url;
}

function setParkFooter(data) {
  const footer = document.querySelector('#park-footer');
  footer.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setParkFooter(parkData);
}