'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./FlexButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexButton = function FlexButton() {
    return _react2.default.createElement(
        'div',
        { className: 'flex-button' },
        'Custom button'
    );
};

exports.default = FlexButton;