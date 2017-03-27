import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

var Day = require('../../Molecules/Day');

const WeekItem = styled.ol`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
`;
const DayItem = styled.li`
    color: #fff;
    flex: 1;
    margin: 1px;
    min-width: 14.1%;
    position: relative;
    text-align: center;

    p { display: none; }
    h3 {
        background: ${props => props.available ? '#95c532' : '#f05093'};
    }

    @media screen and (min-width: 600px) {
        min-height: 240px;
    }
`;


var Week = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            days: [],
            availableImage: '',
            unAvailableImage: ''
        }
    },
    componentWillMount: function () {
        this.setState({
            days: this.props.days,
            availableImage: this.props.availableImage,
            unAvailableImage: this.props.unAvailableImage 
        })
    },
    componentDidMount: function () {
        this.setState({
          isLoading: false       
        })
    },
    render: function () {
        var availableImage = this.state.availableImage;
        var unAvailableImage = this.state.unAvailableImage;
        
        var dayItems = this.state.days.map(function(day) {
            var available = day.available;
            var dayMoment = moment(day);
            var dayName = dayMoment.format('dddd');

            var image = function () {
                if (available == true) {
                    return availableImage;
                } else {
                    return unAvailableImage;                    
                }
            }
            
            return (
                <DayItem key={dayMoment.toString()} available={available}>
                    <p key={dayMoment.toString() + dayName}>{day.available}</p>
                    <Day
                        key={dayName.toString()}
                        weekDay={dayName}
                        image={image()} />
                </DayItem>
            );
        }, this);

        return (
            <WeekItem>
                {dayItems}
            </WeekItem>
        );
    }
});

module.exports = Week;