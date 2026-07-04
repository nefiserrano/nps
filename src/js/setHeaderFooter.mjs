import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  if (disclaimer) {
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
  }

  const heroContent = document.querySelector(".hero-content, .hero-banner__content");
  if (heroContent) {
    heroContent.innerHTML = parkInfoTemplate(data);
  }

  const pageTitle = document.querySelector("head title");
  if (pageTitle) {
    pageTitle.textContent = data.fullName;
  }

  const heroImage = document.querySelector(".hero img, .hero-banner img");
  if (heroImage && data.images?.[0]?.url) {
    heroImage.src = data.images[0].url;
  }
}

function setParkFooter(data) {
  const footer = document.querySelector("#park-footer");
  if (footer) {
    footer.innerHTML = footerTemplate(data);
  }
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setParkFooter(parkData);
  enableNavigation();
}