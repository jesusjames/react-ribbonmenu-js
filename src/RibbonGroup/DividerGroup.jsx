import React from 'react'
import classNames from 'classnames';

const DividerGroup = props => {

    let {
        className,
        ...rest
    } = props;

    return(
        <div className={classNames("group-divider", className)} {...rest}/>
    )
}


export default DividerGroup;