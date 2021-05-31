import { Component } from 'react';
import '../assets/scss/newsletter.scss';
import { newsletterData } from '../data/newsletter-data';

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

class NewsletterForm extends Component {
  render() {
    return (
      <form className='newsletter-form' action="" method="post">
        <input type="text" name="" id="" placeholder={newsletterData.mailPlaceholder} />
        <input type="button" value={newsletterData.button} />
      </form>
    )
  }
}