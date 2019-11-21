import React from 'react';
import './ribbonmenuglobal.css';
import 'bootstrap/dist/css/bootstrap.css';

const RibbonMenu = (props) => {
    return(
        <nav className="ribbon-menu">
            {props.children}
        </nav>
    )
}

export default RibbonMenu;