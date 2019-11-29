import React, {PureComponent} from 'react';
import './style.css';

class RibbonMenu extends PureComponent {

    constructor(props){
        super(props);
        console.log('%creact-ribbonmenu-js v1.1.0', 'background: #339955; padding: 4px; font-weight: bold; color: white');
    }

    render(){
        const{
            children,
            ...rest
        } = this.props;
        
        return(
            <nav className="ribbon-menu" {...rest}>
                {children}
            </nav>
        )
    }   
}

export default RibbonMenu;