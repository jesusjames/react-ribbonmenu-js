import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from '../ribbonmenu.module.css';

const TapItem = (props) => {

    let {
        className,
        static: staticTap,
        disabled,
        backgroundColor,
        textColor,
        text,
        style: styles,
        ...rest
    } = props;

    const classes = classNames(className, {static: staticTap}, {[style.disabled]: disabled});
    const styleLI = backgroundColor && {backgroundColor: backgroundColor};
        textColor && (styleBG.color = textColor);
    
    return(
        <li className={classes} style={{...styleLI, ...styles}} {...rest} >
            <a>{text}</a>
        </li>
    )
}

TapItem.propTypes = {
    static: PropTypes.bool,
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string.isRequired
}

TapItem.defaultProps = {
    static: false,
    disabled: false
}

export default TapItem
