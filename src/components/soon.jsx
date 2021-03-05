import { Component } from 'react';
import '../assets/scss/soon.scss';
import { ReactComponent as AppStoreButton } from '../assets/images/download-app-store.svg'
import { ReactComponent as GooglePlayButton } from '../assets/images/download-google-play.svg'

export default class Soon extends Component {
  render() {
    return (
      <div className="soon">
        <span className='title'>soon available on:</span>
        <button className='download app-store'><AppStoreButton /></button>
        <button className='download google-play'><GooglePlayButton /></button>
      </div>
    )
  }
}