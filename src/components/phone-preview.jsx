
import '../assets/scss/phone-preview.scss'
import { ReactComponent as Phone } from '../assets/images/phone.svg'
// import { Frame, useCycle } from 'framer';


export function Preview() {
  return (
    <div className="preview">
      <div className="phone">
        <Phone className='phone-overlay' />
        <div className="phone-content">
          <div className="phone-body">asdasd</div>
        </div>
      </div>
      <div className="circle" data-aos=""></div>
      {/* <div className="circle" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-mirror='true' data-aos-once="false"></div> */}
    </div>
  )
}
