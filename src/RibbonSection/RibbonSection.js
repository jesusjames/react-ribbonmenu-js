import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { activeTabContext } from './../RibbonContent/activeTabcontext';

const RibbonSection = (props) => {
    let {
        className,
        tabId,
        backgroundColor,
        textColor,
        style: styles,
        children,
        ...rest,
    } = props;

    const styleSection = {backgroundColor, color: textColor};


    return(
        <activeTabContext.Consumer>
            {
              ({activeTabId}) => (
                <div className={classNames('section tab-pane fade', className, {'show active': tabId === activeTabId})} 
                    style={{...styleSection, ...styles}}
                    id={tabId} {...rest}>
                    {children}
                </div>
              )
            }
        </activeTabContext.Consumer>
    )
}

RibbonSection.propTypes = {
    className: PropTypes.string,
    tabId: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
};

export default RibbonSection;