import { Component } from 'react';
import "../assets/scss/backtotop.scss";
import { ReactComponent as BackToTopIcon } from '../assets/images/backtop.svg';

export class BackToTop extends Component {
  render() {
    return (
      <a href="#home" className='back-to-top' > <BackToTopIcon /></a>
    )
  }
}