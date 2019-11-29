import React, {PureComponent} from 'react';
import classNames from 'classnames';

export class RibbonToggleGroup extends PureComponent {

    render(){

        let {
            className,
            children,
            ...rest
        } = this.props;

        return(
            <div className={classNames("ribbon-toggle-group button-group", className)}
                data-role-buttongroup="true" data-role="buttongroup" {...rest}>
                {children}
            </div>
        )
    }
}

export default RibbonToggleGroup;