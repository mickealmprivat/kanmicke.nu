var React = require('react');
var PropTypes = React.PropTypes;

require('./index.css');


var Header = React.createClass ({
    render () {
        return(
            <header className={"callout " + (this.props.evenWeek ? 'is-unavailable' : 'is-available')}>
                <h1>{this.props.headerTitle}</h1>
                <h2>{this.props.evenWeek ? 'Nej.' : 'Ja!'}</h2> 
            </header>
        )
    }    
});

Header.PropTypes = {
    evenWeek: PropTypes.number.isRequired,
    headerTitle: PropTypes.string.isRequired
}


module.exports = Header;