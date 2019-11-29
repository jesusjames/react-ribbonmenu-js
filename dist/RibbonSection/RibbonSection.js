'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _activeTabcontext = require('./../RibbonContent/activeTabcontext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RibbonSection = function RibbonSection(props) {
    var className = props.className,
        tabId = props.tabId,
        backgroundColor = props.backgroundColor,
        textColor = props.textColor,
        styles = props.style,
        children = props.children,
        rest = _objectWithoutProperties(props, ['className', 'tabId', 'backgroundColor', 'textColor', 'style', 'children']);

    var styleSection = { backgroundColor: backgroundColor, color: textColor };

    return _react2.default.createElement(
        _activeTabcontext.activeTabContext.Consumer,
        null,
        function (_ref) {
            var activeTabId = _ref.activeTabId;
            return _react2.default.createElement(
                'div',
                _extends({ className: (0, _classnames2.default)('section tab-pane fade', className, { 'show active': tabId === activeTabId }),
                    style: _extends({}, styleSection, styles),
                    id: tabId }, rest),
                children
            );
        }
    );
};

RibbonSection.propTypes = {
    className: _propTypes2.default.string,
    tabId: _propTypes2.default.string.isRequired,
    backgroundColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string
};

exports.default = RibbonSection;