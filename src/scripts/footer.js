import { footerData } from "./data.js";

function footer() {
  let footerHTML = '';
  footerData.forEach(footerDate => {
    footerHTML += `
      
    `;
  })
  document.querySelector('.jsFooterContainer').innerHTML = footerHTML;
}