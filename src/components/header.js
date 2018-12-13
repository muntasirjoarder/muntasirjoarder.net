import React, {Component} from 'react'
import { Link } from 'react-scroll'

const profileImg = require('../dist/img/myphoto.jpg')

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        windowWidth: typeof window !== 'undefined' && window.innerWidth,
        mobileMenuVisible: false
    };
  }
  handleResize() {
    this.setState({windowWidth: typeof window !== 'undefined' && window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleClick = (event) => {
    if(this.state.windowWidth <= 992) { 
      this.setState({mobileMenuVisible: !this.state.mobileMenuVisible});
    }
  }
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Muntasir Joarder</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImg} alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onClick={this.handleClick}></span>
      </button>
      <div className={this.state.mobileMenuVisible ? 'collapse navbar-collapse show':'collapse navbar-collapse'} id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link onClick={this.handleClick} className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.handleClick} className="nav-link"  activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.handleClick} className="nav-link" activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.handleClick} className="nav-link"  activeClass="active" to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link>
          </li>
         
          <li className="nav-item">
            <Link onClick={this.handleClick} className="nav-link"  activeClass="active" to="interests" spy={true} smooth={true} offset={50} duration={500}>Interests</Link>

          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Header