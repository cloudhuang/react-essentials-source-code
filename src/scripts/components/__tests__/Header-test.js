jest.dontMock('../Header.react');

describe('Header Component', function () {
    it('render provider the header text', function () {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');
        var Header = require('../Header.react');

        var header = TestUtils.renderIntoDocument(
            <Header text='Testing......' />
        );

        var actualHeaderText = ReactDOM.findDOMNode(header).textContent;

        expect(actualHeaderText).toEqual('Testing......');

        var defaultHeader = TestUtils.renderIntoDocument(
            <Header />
        );

        var actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;
        expect(actualDefaultHeaderText).toEqual('Default Header');
    });
});