import React from 'react';
import './ribbonmenuglobal.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';

const RibbonMenu = (props) => {
    return(
        <nav className="ribbon-menu">
            {props.children}
        </nav>
    )
}

export default RibbonMenu;