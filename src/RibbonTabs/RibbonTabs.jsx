import React from 'react'

const RibbonTaps = (props) => {
    return(
        <ul className="tabs-holder">
            {props.children}
        </ul>
    )
}

export default RibbonTaps