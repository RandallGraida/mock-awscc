import { headerData } from "./data/headerData.js"

export function header() {
  let headerHTML = '';

  headerData.forEach(headerData => {
    headerHTML += `
      <div class="awsccLogoContainer jsAwsccLogoContainer">
        <img class="awsccLogo" src="${headerData.imageId}">
      </div>
      <div class="headerInformation jsHeaderInformation">
        <p class="headerInformationParagraph">${headerData.whyUs}</p>
        <p class="headerInformationParagraph">${headerData.whoWeAre}</p>
        <p class="headerInformationParagraph">${headerData.events}</p>
        <p class="headerInformationParagraph">${headerData.careers}</p>
      </div>
      <div class="mockHeaderInformation jsMockHeaderInformation">
        <i class="fa fa-search"></i>
      </div>
    `;
  })
  document.querySelector('.jsHeaderContainer').innerHTML = headerHTML;
} 