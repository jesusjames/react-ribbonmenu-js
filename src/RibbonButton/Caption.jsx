import React from 'react'
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import styleCom from '../ribbonmenu.module.css';

const Caption = props => {

    let {
        className,
        text,
        disabled,
        ...rest
    } = props;

    return(
        <span className={classNames("caption", className, {[styleCom.disabled]: disabled})} {...rest}>
            {text}
        </span>
    )
}

Caption.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

Caption.defaultProps = {
    disabled: false
}

export default Caption;