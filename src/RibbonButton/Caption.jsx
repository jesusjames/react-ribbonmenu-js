import React from 'react'
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Caption = props => {

    let {
        className,
        text,
        ...rest
    } = props;

    return(
        <span className={classNames("caption", className)} {...rest}>
            {text}
        </span>
    )
}

Caption.propTypes = {
    text: PropTypes.string.isRequired
}

export default Caption;