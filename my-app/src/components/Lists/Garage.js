import React, { Component } from "react";
import './Garage.css';

export const Car = ( props ) => {
    return <li className="Car">{props.brand}</li>;
}

class Garage extends Component {
    render() {
        const cars = [
            {id: 1, brand: 'Ford'},
            {id: 2, brand: 'BMW'},
            {id: 3, brand: 'Audi'}
        ];

        return (
            <div className="Garage">
                <p>These cars are in the garage:</p>
                <ul>
                    {
                        cars.map((car) => <Car key={car.id} brand={car.brand} />)
                    }
                </ul>
            </div>
        );
    }

}

export default Garage;