import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RibbonGroup extends PureComponent {

    render(){

        let {
            className,
            children,
            text,
            ...rest
        } = this.props;

        return(
            <div className={classNames("group", className)} {...rest}>
                {children}
                {text !== undefined && (<span className="title">{text}</span>)}
            </div>
        )
    }
}

RibbonGroup.propTypes = {
    text: PropTypes.string
}

RibbonGroup.defaultProps = {
    text: undefined
}

export default RibbonGroup;