import { headerData } from "./data/headerData.js"

export function header() {
  let headerHTML = '';

  headerData.forEach(headerData => {
    headerHTML += `
      <div class="awsccLogoContainer jsAwsccLogoContainer">
        <img class="awsccLogo" src="${headerData.imageId}">
      </div>
      <div class="headerInformation jsHeaderInformation">
        <p>${headerData.whyUs}</p>
        <p>${headerData.whoWeAre}</p>
      </div>
      <div class="mockHeaderInformation jsMockHeaderInformation">
        <i class="fa fa-search"></i>
      </div>
    `;
  })
  document.querySelector('.jsHeaderContainer').innerHTML = headerHTML;
} 