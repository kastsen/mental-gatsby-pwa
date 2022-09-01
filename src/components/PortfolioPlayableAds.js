import React from "react"
import icon from '../images/games.png'

const PortfolioPlayableAds = () =>
  <>
    <div className="text-center">
      <img src={icon} alt='Playable Ads' loading='lazy' className='projectIcon' width="46" height='auto'/>
      <h3>
        Games & Playable Ads
      </h3>
    </div>

    <p className='reference text-center'>
      Playable ads are an interactive video game ad.<br/>
      Art & concept by <a href="https://vizor-games.com/" target='_blank'>Vizor Games</a>
    </p>

    <div className="row projects playableAds active">
      <div className="playable">
        <iframe src="/p979.html" loading='lazy' frameBorder="0" width="100%" height="auto"></iframe>
      </div>
      <div className="playable">
        <iframe src="/p1825.html" loading='lazy' frameBorder="0" width="100%" height="auto"></iframe>
      </div>
      <div className="playable">
        <iframe src="/p1664.html" loading='lazy' frameBorder="0" width="100%" height="auto"></iframe>
      </div>
    </div>
  </>
;

export default PortfolioPlayableAds;
