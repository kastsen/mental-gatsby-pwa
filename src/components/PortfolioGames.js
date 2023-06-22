import React from "react";
import icon from '../images/games.png';
import screenshotSheep from '../images/screenshot-bears-and-sheep-playable-vizor-games.png';
import screenshotCactus from '../images/screenshot-cactus-playable-vizor-games.png';

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
				<a href={'/p1664.html'}>
					<img src={screenshotSheep} loading='lazy' width="600" title="angry sheep" alt={'angry sheep playable vizor games'}></img>
				</a>
			</div>
			<div className="playable">
				<a href={'/p1825.html'}>
					<img src={screenshotCactus} loading='lazy' width="600" title="brainteaser" alt={'cactus playable vizor games'}></img>
				</a>
			</div>
		</div>
	</>;

export default PortfolioGames;