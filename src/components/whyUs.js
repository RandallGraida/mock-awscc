import { whyUsData } from "./data/whyUsData.js";

export function whyUs() {
  let whyUsHTML = '';

  // Expect whyUsData to be an array with at least one object
  whyUsData.forEach(whyUsData => {
    // 1st container: text left, image right
    whyUsHTML += `
      <section class="whyUsSection" aria-label="Real world benefits">
        <div class="whyUsContainer">
          <div class="whyUsGrid">
            <div class="whyUsInner">
              <div class="whyUsContent">
                <h3 class="whyUsTitle">${whyUsData.memberBenefits.realWorld}</h3>
                <p class="whyUsDesc">${whyUsData.memberBenefits.realWorldBenefits}</p>
              </div>

              <div class="whyUsMedia" aria-hidden="false">
                <img src="${whyUsData.memberBenefits.realWorldImage}" alt="${whyUsData.memberBenefits.realWorldImage}"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    whyUsHTML += `
      <section class="whyUsSection reverse" aria-label="Learn or office">
        <div class="whyUsContainer">
          <div class="whyUsGrid">
            <div class="whyUsInner">
              <div class="whyUsContent">
                <h3 class="whyUsTitle">${whyUsData.learnOrOffice.office}</h3>
                <p class="whyUsDesc">${whyUsData.learnOrOffice.learn}</p>
              </div>

              <div class="whyUsMedia" aria-hidden="false">
                <img src="${whyUsData.learnOrOffice.learnOrOfficeImage}" alt="${whyUsData.learnOrOffice.learnOrOfficeImage}"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    // 3rd container: text left, image right
    whyUsHTML += `
      <section class="whyUsSection" aria-label="Hackathons and competitions">
        <div class="whyUsContainer">
          <div class="whyUsGrid">
            <div class="whyUsInner">
              <div class="whyUsContent">
                <h3 class="whyUsTitle">${whyUsData.memberBenefits.hackathonAndCompetition}</h3>
                <p class="whyUsDesc">${whyUsData.memberBenefits.hackathonAndCompetitionBenefits}</p>
              </div>

              <div class="whyUsMedia" aria-hidden="false">
                <img src="${whyUsData.memberBenefits.hackathonAndCompetitionImage}" alt="${whyUsData.memberBenefits.hackathonAndCompetitionImage}" />
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  });

  document.querySelector('.jsWhyUsContainer').innerHTML = whyUsHTML;
}