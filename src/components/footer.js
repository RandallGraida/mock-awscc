import { footerData } from "./data/footerData.js";

export function footer() {
  let footerHTML = '';
  footerData.forEach(footerData => {
    footerHTML += `
      <div class="itsAlwaysDayOneFooterContainer">
        <p>${footerData.itsAlwaysDayOne}</p>
      </div>
      <div class="footerDataContainer">
        <div>
          <a>${footerData.aboutUs}</a>
          <a>${footerData.careers}</a>
          <a>${footerData.location}</a>
        </div>
        <div>
          <a>${footerData.awsccHistory}</a>
          <a>${footerData.departments}</a>
          <a>${footerData.offices}</a>
        </div>
      </div>
    `;
  })
  document.querySelector('.jsFooterContainer').innerHTML = footerHTML;
}