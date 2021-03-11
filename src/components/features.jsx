import { Component } from 'react';
import '../assets/scss/features.scss'
import { featuresData } from '../data/features-data';
import { Preview } from './phone-preview';

export class Features extends Component {
  render() {
    return (
      <section className="features" id='features'>
        <div className="container">
          <Preview />
          <div className="features-list">
            {featuresList}
          </div>
        </div>
      </section>
    )
  }
}

class Feature extends Component {
  render() {
    return (
      <div className="feature" data-aos=" ">
        <div className="icon">
          {this.props.icon}
        </div>
        <div className="text">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

const featuresList = featuresData.map((element, index) =>
  <Feature icon={element.icon} alt={element.alt} title={element.title} description={element.description} key={`feature-${index}`} />
)