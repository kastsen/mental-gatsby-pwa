import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import '../scss/modalWindow.scss'
import GetStartedForm from "../components/Form"
import '../scss/ui.scss'

const visibleScroll = () => {
  const page = document.querySelector('html')
  page.style.overflow = 'visible';
}

const ModalExamplePage = () => (
  <div className="requestForm">
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div className='form'>
          {modal ? (
            <Link to={closeTo} className='close' onClick={visibleScroll}>
            </Link>
          ) : (<></>)}
          <h2>Contact Us</h2>
          <GetStartedForm/>
          <a href="/"><span className='closeIcon'>x</span></a>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </div>
)

export default ModalExamplePage
