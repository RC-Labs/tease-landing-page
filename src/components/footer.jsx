import { Component } from 'react';
import { footerMenuData, disclaimer } from '../data/footer-data';
import "../assets/scss/footer.scss"

export class Footer extends Component {
  render() {
    return (
      <footer className="footer" id='support'>
        <div className="container">
          {/* <div className="left"> */}
          {/* <FooterMenuList /> */}
          <p className="disclaimer">
            {disclaimer}
          </p>
          {/* </div> */}
          {/* <div className="right">
            <Soon />
          </div> */}
        </div>
        <Copyright />
      </footer>
    )
  }
}

// class FooterMenuList extends Component {
//   render() {
//     return (
//       <ul className="footer-menu">
//         {footerMenu}
//       </ul>
//     )
//   }
// }

// const footerMenu = footerMenuData.map((element, index) =>
//   <li key={`footer-menu-${index}`}>{element.name}</li>
// )

class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <span>{new Date().getFullYear() + " Copyright © "} Tease</span>
      </div>
    )
  }
}