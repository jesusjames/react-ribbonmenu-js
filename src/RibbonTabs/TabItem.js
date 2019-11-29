import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TapItem = (props) => {

    let {
        className,
        static: staticTap,
        active,
        disabled,
        backgroundColor,
        textColor,
        text,
        style: styles,
        ...rest
    } = props;

    const classes = classNames(className, {'static': staticTap}, {'disabled': disabled}, {active});
    const styleLI = backgroundColor && {backgroundColor};
        textColor && (styleLI.color = textColor);
    
    return(
        <li className={classes} style={{...styleLI, ...styles}} {...rest} >
            <a href={null}>{text}</a>
        </li>
    )
}

TapItem.propTypes = {
    static: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string.isRequired
}

TapItem.defaultProps = {
    static: false,
    disabled: false,
    active: false
}

export default TapItem