var React = require('react')
var ReactDOM = require('react-dom')

var ReactClass = React.createClass({
	render: function() {

		if (this.props.isHidden) {
			return null;
		}

		var header = this.props.header + ' Lastest Tweets';
		return React.createElement('h1', { className: 'header' }, header);
	}
});

var reactComponentElement = React.createElement(ReactClass);
				  
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));	
