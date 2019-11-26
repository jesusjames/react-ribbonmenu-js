import React, {PureComponent} from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class RibbonButton extends PureComponent {
    render() {

        let {
            className,
            children,
            iconLeft,
            dropdown,
            ...rest
        } = this.props;

        return(
            <button className={classNames(className, {"ribbon-button": !iconLeft && !dropdown}, {'ribbon-icon-button': iconLeft}, 
                {'dropdown-toggle': dropdown})} {...rest}>
                {children}
            </button>
        )
    }
}

RibbonButton.propTypes = {
    iconLeft: PropTypes.bool,
    dropdown: PropTypes.bool,
} 

RibbonButton.defaultProps = {
    iconLeft: false,
    dropdown: false
}


export default RibbonButton;