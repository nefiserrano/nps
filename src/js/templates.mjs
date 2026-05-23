import spritePath from "../images/sprite.symbol.svg";

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner-title">${info.name}</a>
  <p>
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function mediaCardTemplate(info) {
  return `<div class="media-card">
  <a href="${info.link}">
  <img src="${info.image}" alt="${info.name}" class="media-card__img">
  <h2 class="media-card__title">${info.name}</h2>
  </a>
  <p>${info.description}</p>
   </div>`;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers)
  
  return `<section class="contact">
  <h2>Contact Info</h2>
  <h3>Mailing Address:</h3>
  <div><p>${mailing.line1}</p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h3>Phone:</h3>
  <p>${voice}</p>
  </section>`;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find((phone) => phone.type === "Voice");
  return voice.phoneNumber;
}

function alertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
  <h3>${center.name}</h3>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

function activityListTemplate(activities) {
  return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}

export { parkInfoTemplate, mediaCardTemplate, footerTemplate, alertTemplate, visitorCenterTemplate, activityListTemplate };