import React from 'react'

import "../styles/main.sass"

let wait = (time = 500) => new Promise(fulfill => {
  setTimeout(() => fulfill(), time)
})

export default class IndexPage extends React.Component {

  componentDidMount() {
    this._link.href = 'mailto:teppo@kallio.me'

    Promise.resolve()
    .then(() => this.p.classList.add('a-s1'))
    .then(() => wait(300))
    .then(() => this.p.classList.add('a-s2'))
    .then(() => wait(250))
    .then(() => this.p.classList.add('a-s3'))
    .then(() => wait(800))
    .then(() => this.p.classList.add('a-s4'))
    .then(() => wait(800))
    .then(() => this.p.classList.add('a-s5'))
  }

  render() {

    return (
      <div className="full-page" ref={el => this.p = el}>
        <div className="full-page-content">
          <div className="full-page-logo a-l">
            <img src="/img/logo-white.svg" alt="Teppo Kallio"/>
          </div>
          <h1>
            <span className="a-t1">Hi!</span> <span className="a-t2">My name is Teppo Kallio <br/> and I’m a full-stack developer.</span> <br/> <a href="#" ref={el => this._link = el} className="a-t3">Let’s work together!</a>
          </h1>
        </div>
      </div>
    )
  }
}