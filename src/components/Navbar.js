import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';



export default function Navbar(props) {


    const redModeNav = () => {
        if (props.mode) {
            return 'light';
        }
        else if (props.mode1) {
            return 'primary';
        }
        else {
            return 'light';
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar bg-${redModeNav()} bg-${redModeNav()}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    <div className={`form-check form-switch text-${props.mode1 === 'danger' ? 'dark' : props.mode2 === 'primary' ? 'light' : 'dark'}`}>
                        <input className="form-check-input my-1 mx-0" type="checkbox" onClick={props.toggleRedMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label my-0 mx-2" htmlFor="flexSwitchCheckDefault">Enable RedMode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode2 === 'primary' ? 'light' : 'dark'}`}>
                        <input className="form-check-input my-1 mx-0" type="checkbox" onClick={props.toggleBlueMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label my-0 mx-2" htmlFor="flexSwitchCheckDefault">Enable BlueMode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'dark' : props.mode2 === 'primary' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav >

    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     title: 'Set the title',
//     aboutText: 'Set the about text',
// }