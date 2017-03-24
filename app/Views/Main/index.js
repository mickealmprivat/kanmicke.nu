var React = require('react');
var moment = require('moment');

var Header = require('../../Organisms/Header');
var Listing = require('../../Organisms/Listing')


require('./index.css');

var Main = React.createClass ({
    getInitialState: function () {
        return {
            evenWeek: '',
            weekNumber: ''
        }
    },
    componentDidMount: function () {
        var week = moment().isoWeek();
        var evenWeek = week % 2;
        
        this.setState({
            evenWeek: evenWeek,
            weekNumber: week
        });

    },
    render: function () {
        return (
            <div>
                <Header
                    evenWeek={this.state.evenWeek}
                    headerTitle="Kan Micke nu?" />
                <Listing 
                    evenWeek={this.state.evenWeek}
                    weekNumber={this.state.weekNumber}  />
            </div>
        )
    }
})

module.exports = Main;