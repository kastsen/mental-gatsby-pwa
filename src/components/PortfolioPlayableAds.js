import React from "react"

const PortfolioPlayableAds = () =>
  <>
    <h3 className='text-center'>
      Playable Ads
    </h3>

    <p className='reference text-center'>
      Playable ads are an interactive video game ad.<br/>
      Art & concept by <a href="https://vizor-games.com/" target='_blank'>Vizor Games</a>
    </p>

    <div className="row projects playableAds active">
      <div className="playable">
        <iframe src="/p979.html" frameBorder="0" width="100%" height="auto"></iframe>
      </div>
      <div className="playable">
        <iframe src="/p1825.html" frameBorder="0" width="100%" height="auto"></iframe>
      </div>
      <div className="playable">
        <iframe src="/p1664.html" frameBorder="0" width="100%" height="auto"></iframe>
      </div>
    </div>
  </>
;

export default PortfolioPlayableAds;
