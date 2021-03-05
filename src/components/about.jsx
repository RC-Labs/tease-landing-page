import { Component } from 'react';
import { aboutData } from '../data/about-data';
import '../assets/scss/about.scss';

import Soon from './soon';

export class About extends Component {
  render() {
    return (
      <section className='about' id='about'>
        <div className="container">
          <AboutText />
          <Soon />
        </div>
      </section>
    )
  }
}

class AboutText extends Component {
  render() {
    return (
      <div className="text">
        <h2>{aboutData.header}</h2>
        <p>{aboutData.paragraph}</p>
      </div>
    )
  }
}