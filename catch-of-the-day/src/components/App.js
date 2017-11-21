import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

    constructor() {
        super();

        this.addFish = this.addFish.bind(this);

        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        //make a copy of the current state
        const fishes = {...this.state.fishes};
        //grab current timestamp for an Id
        const timestamp = Date.now();
        //add in our new fish
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({fishes});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;