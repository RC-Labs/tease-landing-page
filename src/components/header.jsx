import { Component } from 'react';
import '../assets/scss/header.scss';
import '../assets/scss/burger.scss';
import { menuData } from '../data/header-data';
import { ReactComponent as Logo } from '../assets/images/logo.svg'


export class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.turnOff = this.turnOff.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  turnOff() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    return (
      <header>
        <a href="#home"><Logo className={this.state.isOpen ? 'header-logo open' : 'header-logo'} />
          <span className='link-placeholder'>logo</span>
        </a>

        <nav>
          <Menu />
          <Burger action={this.toggle} passOpen={this.state.isOpen} toggleClass={this.state.isOpen ? 'burger open' : 'burger'} />
          <MobileMenu action={this.turnOff} passOpen={this.state.isOpen} menuClass={this.state.isOpen ? 'mobile-menu menu-open' : 'mobile-menu'} />
        </nav>
      </header>
    )
  }
}


// class Buttons extends Component {
//   render() {
//     return (
//       <div className="header-buttons">
//         <div className="button primary-button half-button-left link">Log in</div>
//         <div className="button secondary-button half-button-right link">Sign up</div>
//       </div>
//     )
//   }
// }

class Menu extends Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          {menuLinks}
        </ul>
      </nav>
    )
  }
}

const menuLinks = menuData.map((element, index) =>
  <li className='menu-link' key={`menu-link-${index}`}><a href={element.link} >{element.name}</a></li>
)


class MobileMenu extends Component {

  render() {
    return (
      <ul onClick={() => this.props.action({ passOpen: false })} className={this.props.menuClass}>
        {menuLinks}
      </ul>
    )
  }
}

class Burger extends Component {
  render() {
    return (
      <button onClick={() => this.props.action({ passOpen: !this.props.passOpen })} className={this.props.toggleClass}>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </ button>
    )
  }
}