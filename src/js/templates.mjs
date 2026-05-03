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

export { parkInfoTemplate, mediaCardTemplate, footerTemplate };