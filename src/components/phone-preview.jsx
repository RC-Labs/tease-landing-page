import { Component } from 'react';
import '../assets/scss/phone-preview.scss'
import { ReactComponent as Phone } from '../assets/images/phone.svg'

export default class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="phone">
          <Phone className='phone-overlay' />
          <div className="phone-content">
            <div className="phone-body">asdasd</div>
          </div>
        </div>
        <div className="circle"></div>
      </div>
    )
  }
}