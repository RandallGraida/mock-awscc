import { whoWeAreData } from "./data/whoWeAreData.js";

export function whoWeAre() {
  let whoWeAreHTML = '';

  whoWeAreData.forEach(whoWeAreData => {
    whoWeAreHTML += `
      <section class="feature-section feature-section-wrap" aria-label="Who we are">
        <div class="feature-container">
          <div class="feature-grid">
            <div class="feature-inner">
              <div class="feature-content">
                <p class="feature-kicker">${whoWeAreData.whoAreWe}</p>
                <h3 class="feature-title">${whoWeAreData.awscc}</h3>
                <p class="feature-desc">${whoWeAreData.awsccWhoWeAre}</p>
              </div>

              <div class="feature-media" aria-hidden="false">
                <img src="${whoWeAreData.whoWeAreImage}" alt="${whoWeAreData.whoAreWe}" />
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    whoWeAreHTML += `
      <section class="feature-section feature-section-wrap" aria-label="What we believe">
        <div class="feature-container">
          <div class="feature-grid">
            <div class="feature-inner">
              <div class="feature-content">
                <p class="feature-kicker">${whoWeAreData.whatWeBelieve}</p>
                <h3 class="feature-title">${whoWeAreData.valuesToLiveBy}</h3>
                <p class="feature-desc">${whoWeAreData.values}</p>
              </div>

              <div class="feature-media" aria-hidden="false">
                <img src="${whoWeAreData.whatWeBelieveImage}" alt="${whoWeAreData.whatWeBelieve}" />
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  });
  document.querySelector('.jsWhoWeAreContainer').innerHTML = whoWeAreHTML;
}