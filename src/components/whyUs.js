import { whyUsData } from "./data/whyUsData.js";

export function whyUs() {
  let whyUsHTML = '';

  whyUsData.forEach(whyUsData => {
    whyUsHTML = `
      <div>
        <div>
          <p>${whyUsData.memberBenefits.realWorld}</p>
          <p>${whyUsData.memberBenefits.realWorldBenefits}</p>
        </div>
        <div>
          <img src="${whyUsData.memberBenefits.realWorldImage}"
      </div>
      <div>
        <div>
          <p>${whyUsData.learnOrOffice.learnOrOfficeHeader}</p>
          <p>${whyUsData.learnOrOffice.office}</p>
          <p>${whyUsData.learnOrOffice.learn}</p>
        </div>
        <img src="${whyUsData.learnOrOffice.learnOrOfficeImage}"
      </div>
      <div>
        <div>
          <p>${whyUsData.memberBenefits.hackathonAndCompetition}</p>
          <p>${whyUsData.memberBenefits.hackathonAndCompetitionBenefits}</p>
        </div>
        <img src="${whyUsData.memberBenefits.hackathonAndCompetitionImage}"
      </div>
    `
  });
  document.querySelector('.jsWhyUsContainer').innerHTML = whyUsHTML;
}