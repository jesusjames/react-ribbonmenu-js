import React, {PureComponent} from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styleCom from '../ribbonmenu.module.css'

export class RibbonButton extends PureComponent {
    render() {

        let {
            className,
            children,
            iconLeft,
            dropdown,
            disabled,
            ...rest
        } = this.props;

        return(
            <button className={classNames(className, {"ribbon-button": !iconLeft && !dropdown}, {'ribbon-icon-button': iconLeft}, 
                {'dropdown-toggle': dropdown}, {[styleCom.disabled]: disabled})} {...rest}>
                {children}
            </button>
        )
    }
}

RibbonButton.propTypes = {
    iconLeft: PropTypes.bool,
    dropdown: PropTypes.bool,
    disabled: PropTypes.bool
} 

RibbonButton.defaultProps = {
    iconLeft: false,
    dropdown: false,
    disabled: false
}


export default RibbonButton;