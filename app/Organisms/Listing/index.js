var React = require('react');
var PropTypes = React.PropTypes;

var ListItem = require('../../Molecules/ListItem');

require('./index.css');


var Listing = React.createClass ({
    getInitialState: function () {
        return {
            available: ''
        }
    },
    componentDidMount: function () {
        var available = '';

        if( this.props.evenWeek === 0 ) {
            available: true
        } else {
            available: false
        }
        this.setState({
            available: available
        })
    },
    render: function () {
        return (
            <div>
                <h1>Denn vecka</h1>
                <ul className="list-item-container">
                    <ListItem weekDay="mån" available={this.state.available} />
                    <ListItem weekDay="tis" available={this.state.available} />
                    <ListItem weekDay="ons"  available={this.state.available} />
                    <ListItem weekDay="tors"  available={this.state.available} />
                    <ListItem weekDay="fre"  available={this.state.available} />
                    <ListItem weekDay="lör"  available={this.state.available} />
                    <ListItem weekDay="sön"  available={this.state.available} />
                </ul>
            </div>
        )
    }    
});

module.exports = Listing;