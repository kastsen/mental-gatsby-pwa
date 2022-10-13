import React from "react"
import SectionLayout from "./sectionLayout";
import '../scss/topSection.scss'
import GetStartedBtn from "./GetStartedBtn"
import SocialIcons from "./SocialIcons"

const Main =() => (
  <>
    <SectionLayout name="topSection">

      <div className="background"></div>
      <h1>Yury Kastsen</h1>
      <div className='description'>
        <p>High-performance tools, products, apps & <br/>games development. I'm the kind of person <br/>who isn't afraid of challenges.</p>
      </div>

      <GetStartedBtn/>
      <SocialIcons/>

    </SectionLayout>

    <iframe
      src="/rescue.html"
      frameBorder="0"
      width="50%"
      height="auto"
      className="demoGame"
      title="rescue chute"
    ></iframe>

    <div className="iframeReference">
      Game art & concept by <a href="https://vizor-games.com/" target='_blank' rel="noreferrer">Vizor Games</a>
    </div>
  </>
)

export default Main
