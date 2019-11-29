import React from 'react'

const RibbonTaps = (props) => {

    const {
        children,
        ...rest
    } = props

    return(
        <ul className="tabs-holder" {...rest}>
            {children}
        </ul>
    )
}

export default RibbonTaps