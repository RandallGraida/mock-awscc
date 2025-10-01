import { heroData } from "./data/heroData.js";

export function hero() {
  let heroHTML = '';
  
  heroData.forEach(heroData => {
    // Add span around "Always" if it's not already in the data
    const formattedText = heroData.itsAlwaysDayOne.replace(
      'Always', 
      '<span class="accent-violet">Always</span>'
    );
    
    heroHTML +=  `
      <div class="itsAlwaysDayOneHeroContainer">
        <p class="itsAlwaysDayOneHero">${formattedText}</p>
      </div>
    `;
  });
  document.querySelector('.jsHeroContainer').innerHTML = heroHTML;
}