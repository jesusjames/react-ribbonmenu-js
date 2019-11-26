import React from 'react'
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Icon = props => {

    let {
        className,
        image,
        children,
        ...rest
    } = props;

    return(
        <span className={classNames("icon", className)} {...rest}>
            {children}
        </span>
    )
}

Icon.propTypes = {
    image: PropTypes.bool.isRequired
}

export default Icon;