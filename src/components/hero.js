import { heroData } from "./data/heroData.js";

export function hero() {
  let heroHTML = '';
  
  heroData.forEach(heroData => {
    heroHTML +=  `
      <div class="itsAlwaysDayOneHeroContainer">
        <p class="itsAlwaysDayOneHero">${heroData.itsAlwaysDayOne}</p>
      </div>
      <div class="heroTaglineContainer">
        <p class="heroTagline">${heroData.heroTagline}</p>
      </div>
    `;
  });
  document.querySelector('.jsHeroContainer').innerHTML = heroHTML;
}