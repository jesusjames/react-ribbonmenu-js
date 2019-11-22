import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
/*import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';*/

const RibbonMenu = (props) => {

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