import React from 'react'

import "../styles/main.sass"

export default class IndexPage extends React.Component {

  componentDidMount() {
    this._link.href = 'mailto:teppo@kallio.me'
  }

  render() {

    return (
      <div className="full-page">
        <div className="full-page-content">
          <div className="full-page-logo">
            <img src="/img/logo-white.svg" alt="Teppo Kallio"/>
          </div>
          <h1>
            Hi! My name is Teppo Kallio <br/> and I’m a full-stack developer. <br/> <a href="#" ref={el => this._link = el}>Let’s work together!</a>
          </h1>
        </div>
      </div>
    )
  }
}