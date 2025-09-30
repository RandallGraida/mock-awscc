import { whoWeAreData } from "./data/whoWeAreData.js";

export function whoWeAre() {
  let whoWeAreHTML = '';

  whoWeAreData.forEach(whoWeAreData => {
    whoWeAreHTML += `
      <div class="whoAreWeSubContainer">
        <div>
          <p>${whoWeAreData.whoAreWe}</p>
          <p>${whoWeAreData.awscc}</p>
          <p>${whoWeAreData.awsccWhoWeAre}</p>
        </div>
        <div>
          <img src="${whoWeAreData.whoWeAreImage}"
        </div>   
      </div>
      <div class="whatWeBelieveContainer">
        <div>
          <p>${whoWeAreData.whatWeBelieve}</p>
          <p>${whoWeAreData.valuesToLiveBy}</p>
          <p>${whoWeAreData.values}</p>
        </div>
        <div>
          <img src="${whoWeAreData.whatWeBelieveImage}"
        </div>
      </div>
    ` 
  });
  document.querySelector('.jsWhoWeAreContainer').innerHTML = whoWeAreHTML;
}