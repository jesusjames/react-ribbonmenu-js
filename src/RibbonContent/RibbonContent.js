import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { activeTabContext } from './activeTabcontext';
import classNames from 'classnames';

class RibbonContent extends Component {

    render(){
        const {
            activeTab,
            className,
            children,
            ...rest
          } = this.props;

        return(
            <div className={classNames("content-holder tab-content", className)} {...rest}>
               <activeTabContext.Provider value={{activeTabId: activeTab}}>
                 {children}
               </activeTabContext.Provider>
            </div>
        )
    }
}

RibbonContent.propTypes = {
    activeTab: PropTypes.any.isRequired,
    className: PropTypes.string
};

export default RibbonContent;