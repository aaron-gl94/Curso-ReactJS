import React, { Component } from "react";

class CarConstructor extends Component {
    constructor() {
        super();
        this.state = {
          color: "Red" // GREEN, RED, BLUE
        };
    }

    render() {
        const { color } = this.state;
        return (
            <p className="CarConstructor">This is a Class-Constructor Component called "<font color={color}>{color}</font> Car"</p>
        );
    }
}

export default CarConstructor;