import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
/*import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/

const RibbonMenu = (props) => {
    console.log('%creact-ribbonmenu-js v1.0.5', 'background: #339955; padding: 4px; font-weight: bold; color: white');

    const{
        children,
        ...rest
    } = props;
    
    return(
        <nav className="ribbon-menu" {...rest}>
            {children}
        </nav>
    )
}

export default RibbonMenu;