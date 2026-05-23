import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activityListTemplate } from "./templates.mjs";
import "../css/style.css";
import "../css/conditions.css";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(visitorCenters) {
  const centersContainer = document.querySelector(".visitor ul");
  const html = visitorCenters.map(visitorCenterTemplate);
  centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  const html = activityListTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
  const parkData = await getParkData();
  const visitorCenters = await getVisitorCenterData(parkData.parkCode);
  const parkAlerts = await getParkAlerts(parkData.parkCode);
  setAlerts(parkAlerts);
  setVisitorCenters(visitorCenters);
  setHeaderFooter(parkData);
  setActivities(parkData.activities);
}

init();