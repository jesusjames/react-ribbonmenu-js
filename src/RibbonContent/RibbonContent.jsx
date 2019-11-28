import React, {PureComponent} from 'react';
import { PropTypes } from 'prop-types';
import { omit } from './../Utils';
import { activeTabContext } from './activeTabcontext';
import classNames from 'classnames';

export class RibbonContent extends PureComponent {

    render(){
        const {
            activeTab,
            className
          } = this.props;

        const rest = omit(this.props, Object.keys(RibbonContent.propTypes));

        return(
            <div className={classNames("content-holder tab-content", className)} {...rest}>
               <activeTabContext.Provider value={{activeTabId: activeTab}}>
                 {this.props.children}
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