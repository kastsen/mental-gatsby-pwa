import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import './modalWindow.scss'
import GetStartedForm from "../components/Form"

const ModalExamplePage = () => (
  <div className="requestForm">
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div className='modalWindow'>
          {modal ? (
            <Link to={closeTo} className='close'>
            </Link>
          ) : (
            <header>
              <h1>
                Website Title
              </h1>
            </header>
          )}
          <h2>Get Started</h2>
          <GetStartedForm/>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  </div>
)

export default ModalExamplePage