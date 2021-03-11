import { Component } from 'react';
import '../assets/scss/hero.scss';
import heroVideo from '../assets/images/15536284-preview.mp4';

export class Hero extends Component {
  render() {
    return (
      <section className="hero" id='home'>
        <div className="hero-overlay"></div>
        <video className='logo-video' autoPlay loop muted>
          <source src={heroVideo} type='video/mp4' />
        </video>
        <video className='hero-video' autoPlay loop muted>
          <source src={heroVideo} type='video/mp4' />
        </video>
      </section>
    )
  }
}