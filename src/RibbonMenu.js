import React from 'react';
import './style.css';

const RibbonMenu = (props) => {
    console.log('%creact-ribbonmenu-js v1.0.15', 'background: #339955; padding: 4px; font-weight: bold; color: white');

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