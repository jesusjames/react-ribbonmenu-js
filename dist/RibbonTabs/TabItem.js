'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TapItem = function TapItem(props) {
    var className = props.className,
        staticTap = props.static,
        active = props.active,
        disabled = props.disabled,
        backgroundColor = props.backgroundColor,
        textColor = props.textColor,
        text = props.text,
        styles = props.style,
        rest = _objectWithoutProperties(props, ['className', 'static', 'active', 'disabled', 'backgroundColor', 'textColor', 'text', 'style']);

    var classes = (0, _classnames2.default)(className, { 'static': staticTap }, { 'disabled': disabled }, { active: active });
    var styleLI = backgroundColor && { backgroundColor: backgroundColor };
    textColor && (styleLI.color = textColor);

    return _react2.default.createElement(
        'li',
        _extends({ className: classes, style: _extends({}, styleLI, styles) }, rest),
        _react2.default.createElement(
            'a',
            { href: null },
            text
        )
    );
};

TapItem.propTypes = {
    static: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    active: _propTypes2.default.bool,
    backgroundColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string,
    className: _propTypes2.default.string,
    text: _propTypes2.default.string.isRequired
};

TapItem.defaultProps = {
    static: false,
    disabled: false,
    active: false
};

exports.default = TapItem;