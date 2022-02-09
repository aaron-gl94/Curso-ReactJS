import React, { Component } from "react";
import './Car.css';

class CarProps extends Component {
    constructor(props) {
        super(props);
        const car = this.props || {};

        const {
            brand = 'Ford (default props)',
            model = 'Mustang',
            color = 'Black',
            year = 1968
        } = car;

        this.state = {
            brand,
            model,
            color,
            year
        }
    }
    
    render() {
        const { brand, model, color, year } = this.state;
        return (
            <div className="CarProps">
                <p>This is a Props-Component called "Car" with the next Props:</p>
                <ul className="CarProps-items">
                    <li><b>Brand:</b> {brand}</li>
                    <li><b>Model:</b> {model}</li>
                    <li><b>Color:</b> <font color={color}>{color}</font></li>
                    <li><b>Year:</b> {year}</li>
                </ul>
            </div>
        );
    }
}

export default CarProps;