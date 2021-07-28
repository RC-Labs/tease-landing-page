import { Component } from 'react';
import '../assets/scss/newsletter.scss';
import { newsletterData } from '../data/newsletter-data';
import Iframe from 'react-iframe'

export class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="container">
          <div className="text">
            <h2>{newsletterData.header}</h2>
            <p>{newsletterData.description}</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    )
  }
}

// class NewsletterFormC extends Component {
//   render() {
//     return (
//       <form className='newsletter-form' action="" method="post">
//         <input type="text" name="" id="" placeholder={newsletterData.mailPlaceholder} />
//         <input type="button" value={newsletterData.button} />
//       </form>
//     )
//   }
// }

class NewsletterForm extends Component {
  render() {
    return (
      <Iframe url="https://forms.freshmail.io/f/ygeee93b7r/jzgw9lpq7s/index.html"
        width="100%"
        height="300 px"
        id="myId"
        className="newsletter-form"
        scrolling='no'
        styles=''
        display="initial"
      // position="relative" 
      />
    )
  }
}