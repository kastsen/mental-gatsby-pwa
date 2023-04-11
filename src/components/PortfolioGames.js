import React from "react"
import icon from '../images/games.png'

const PortfolioGames = () =>
  <>
    <div className="text-center">
      <img src={icon} alt='Playable Ads' loading='lazy' className='projectIcon' width="46" height='46'/>
      <h3>
        Games & Playable Ads
      </h3>
    </div>

    <p className='reference text-center copyright'>
      Art & concept by <a href="https://vizor-games.com/" target='_blank' rel="noreferrer">Vizor Games</a>
    </p>

    <div className="row projects playableAds active">
      <div className="playable">
        <iframe src="/p1664.html" loading='lazy' frameBorder="0" width="600" height="420" title="angry sheep"></iframe>
      </div>
      <div className="playable">
        <iframe src="/p1825.html" loading='lazy' frameBorder="0" width="600" height="420" title="brainteaser"></iframe>
      </div>
    </div>
  </>

export default PortfolioGames;
