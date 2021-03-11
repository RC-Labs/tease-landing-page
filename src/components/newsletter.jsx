import { Component } from 'react';
import '../assets/scss/newsletter.scss';

export class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="container">
          <div className="text">
            <h2>Sign up for our teaseletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
        <input type="text" name="" id="" placeholder='asdasd' />
        <input type="button" value="sign up" />
      </form>
    )
  }
}