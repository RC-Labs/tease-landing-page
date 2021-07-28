
import '../assets/scss/phone-preview.scss'
import { ReactComponent as Phone } from '../assets/images/phone.svg'

export function Preview() {
  return (
    <div className="preview">
      <div className="phone">
        <Phone className='phone-overlay' />
        <div className="phone-content">
          <div className="phone-body"></div>
        </div>
      </div>
      <div className="circle" data-aos=""></div>
    </div>
  )
}
