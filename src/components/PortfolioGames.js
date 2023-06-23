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
		<div className="row projects playableAds active">
			<div className="playable">
				<a href={'/save-the-sheep-playavle-ads/'}>
					<img src={screenshotSheep} loading='lazy' width="600"
							 title="Save the sheep - playable ads. Art & concept by Vizor Games."
							 alt={'Save the sheep - playable ads. Art & concept by Vizor Games.'}>
					</img>
				</a>
			</div>
			<div className="playable">
				<a href={'/only-forward-playable-ads/'}>
					<img src={screenshotCactus} loading='lazy' width="600"
							 title="Only forward - playable ads. Art & concept by Vizor Games."
							 alt={'Only forward - playable ads. Art & concept by Vizor Games.'}></img>
				</a>
			</div>
		</div>
	</>;

export default PortfolioGames;