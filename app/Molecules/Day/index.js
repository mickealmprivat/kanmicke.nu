import React from 'react';
import styled from 'styled-components';
var transparentGif = require("./dot_portrait.gif");

const Header = styled.h3`
    text-transform: capitalize;
`;
const Image = styled.img`
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: auto;
    width: 100%;

    @media screen and (min-width: 600px) {
        max-width: 63px;
    }
`;

var Day = React.createClass({
    getInitialState: function () {
        return {
            image: ''
        }
    },
    componentWillMount: function () {
        console.log(this.props.image);
        return {
            
        };
    },
    render: function () {
        return (
            <div>
                <Header>{this.props.weekDay}</Header>
                <Image src={transparentGif} image={this.props.image} />            
            </div>
        );
    }
});

module.exports = Day;