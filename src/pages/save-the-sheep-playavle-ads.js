import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import '../scss/singlePage.scss';

const PrivacyPage = () => (
	<div id="single-page">
		<Layout>
			<SEO title="Privacy" />
			<iframe src="/p1664.html" loading='lazy'
				frameBorder="0" width="100%"
				height="720" title="angry sheep"
				className={'playable-ads-iframe'}
			></iframe>
		</Layout>
	</div>
);

export default PrivacyPage;
