import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand "  href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {//<a className="nav-link" href="/about">{props.about}</a>
              }
            </li>
          </ul>
          <button className="btn-circle mx-2" onClick={()=>props.chooseColor('red')}  style={{backgroundColor:'red',height:'20px',width:'20px',borderRadius:'20px'}} type="submit"></button>
          <button className=" btn-circle"  onClick={()=>props.chooseColor('green')} style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'20px'}} type="submit"></button>
          <button className=" btn-circle mx-2"  onClick={()=>props.chooseColor('yellow')} style={{backgroundColor:'yellow',height:'20px',width:'20px',borderRadius:'20px'}} type="submit"></button>
          <div className={`form-check form-switch form-inline text-${ props.mode==='light'?'dark':'light'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</label>
            </div>
        </div>
      </div>
    </nav>
    )
}

Navbar.propTypes={title:PropTypes.string.isRequired,about:PropTypes.string}
// Navbar.defaultProps={title:"Navbar",about:"about text Here"}