import { upcomingEventData } from "./data/upcomingEventData.js";

function upcomingEvent() {
  let upcomingEventHTML = '';

  upcomingEventData.forEach(upcomingEventData => {
    upcomingEventHTML += `
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `
  });
  document.querySelector('.jsUpcomingEventContainer').innerHTML = upcomingEventHTML;
}