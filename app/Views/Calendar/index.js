import React from 'react';
import moment from 'moment';

import Header from '../../Organisms/Header';
import Week from '../../Organisms/Week';

var AvailableImg = require('../../Images/beer.png');
var UnAvailableImg = require('../../Images/pinkiepie-small.png');

require('./index.css');


var Calendar = React.createClass ({
    getInitialState: function () {
        return {
            days: [],
            evenWeek: '',
            weekNumber: ''
        }
    },
    componentWillMount: function() {
        // Create start and end of week
        var startOfWeek = moment().startOf('isoWeek');
        
        function addWeek (v) {
            return this.add(v, 'week')
        };
        //Testing data
        
        var endOfWeek = moment().add(2, 'week').endOf('isoWeek');
        
        var weekNumber = startOfWeek.isoWeek();

        // days is the array of this weeks days
        var calendarDays = [];

        var day = startOfWeek;

        while (day <= endOfWeek) {
            calendarDays.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        
        var evenWeek = weekNumber % 2;
        var availableDays = calendarDays.slice();
        
        // Get data from server and create new array
        function mockData () {
            // Week 1
            availableDays[0].available = 1;
            availableDays[1].available = 1;
            availableDays[2].available = 0;
            availableDays[3].available = 0;
            availableDays[4].available = 1;
            availableDays[5].available = 1;
            availableDays[6].available = 1;
            // Week 2
            availableDays[7].available = 0;
            availableDays[8].available = 0;
            availableDays[9].available = 1;
            availableDays[10].available = 1;
            availableDays[11].available = 0;
            availableDays[12].available = 0;
            availableDays[13].available = 0;
            // Week 3
            availableDays[14].available = 1;
            availableDays[15].available = 1;
            availableDays[16].available = 0;
            availableDays[17].available = 0;
            availableDays[18].available = 1;
            availableDays[19].available = 1;
            availableDays[20].available = 1;
        }
        mockData();

        this.setState({
            days: availableDays,
            evenWeek: evenWeek,
            weekNumber: weekNumber
        });

    },
    render: function () {
        return (
            <div>
                <Header
                    evenWeek={this.state.evenWeek}
                    headerTitle="Kan Micke nu?" />
                <Week 
                    days={this.state.days}
                    evenWeek={this.state.evenWeek}
                    weekNumber={this.state.weekNumber}
                    availableImage={AvailableImg}
                    unAvailableImage={UnAvailableImg} />
            </div>
        )
    }
})

module.exports = Calendar;