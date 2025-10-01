import { footerData } from "./data/footerData.js";

export function footer() {
  // if footerData is an array with one object (like your example), this will render it once
  let footerHTML = '';
  footerData.forEach(footerData => {
    footerHTML += `
      <div class="footerInner">
        <div class="footerContent" role="contentinfo">
          <div class="itsAlwaysDayOneFooterContainer">
            <p class="itsAlwaysDayOneText">${footerData.itsAlwaysDayOne}</p>
          </div>

          <nav class="footerDataContainer" aria-label="Footer links">
            <div class="footerColumn">
              <a class="footerLink">${footerData.aboutUs}</a>
              <a class="footerLink strong">${footerData.careers}</a>
              <a class="footerLink">${footerData.location}</a>
            </div>

            <div class="footerColumn">
              <a class="footerLink">${footerData.awsccHistory}</a>
              <a class="footerLink">${footerData.departments}</a>
              <a class="footerLink">${footerData.offices}</a>
            </div>
          </nav>

          <div class="footerLegal">
          <h3 class="contactUs">Contact Us</h1>
            <img class="contactInformationIcon" src="${footerData.contactInformation.linkedInIcon}" alt="${footerData.contactInformation.linkedInIcon}" />
            <img class="contactInformationIcon" src="${footerData.contactInformation.facebookIcon}" alt="${footerData.contactInformation.facebookIcon}" />
            <img class="contactInformationIcon" src="${footerData.contactInformation.instagramIcon}" alt="${footerData.contactInformation.instagramIcon}" />
            <p>© ${new Date().getFullYear()} AWS Cloud Club PUP. All Rights Reserved.</p>
          </div>
        </div>

        <div class="footerMedia" aria-hidden="true">
          <img src="${footerData.alfImage}" alt="Decorative pattern" />
        </div>
      </div>
    `;
  });

  document.querySelector('.jsFooterContainer').innerHTML = footerHTML;
}