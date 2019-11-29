import React, {Component} from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';

class RibbonButton extends Component {
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
                {'dropdown-toggle': dropdown}, {'disabled': disabled})} {...rest}>
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