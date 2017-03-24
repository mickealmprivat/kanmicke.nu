var React = require('react');
require('./index.css');

var ListItem = React.createClass({
    componentDidMount: function () {
        console.log(this.props.available);
    },
    render: function () {
        return (
            <li className="list-item">
                <h3 className="list-item__header">{this.props.weekDay}<span>dag</span></h3>
                <img src="http://placekitten.com/60/120" />
            </li>
        )
    }
});

module.exports = ListItem;