var React = require('react')
var ReactDOM = require('react-dom')

var ReactClass = React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		return {
			header: 'Hello World'
		};
	},
	
	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentDidMount: function() {
		console.log('componentDidMount');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},

	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps: ' + nextProps );
	},

	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate');
	},

	componentWillUpdate: function() {
		console.log('componentWillUpdate');
	},

	render: function() {
		console.log('render');

		if (this.props.isHidden) {
			return null;
		}

		var header = this.state.header + ' Lastest Tweets';
		return React.createElement('h1', { className: 'header' }, header);
	},

	componentDidUpdate: function() {
		console.log('componentDidUpdate');
	}


});

var reactComponentElement = React.createElement(ReactClass);
				  
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));	
