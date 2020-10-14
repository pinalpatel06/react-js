import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger'


interface State {
}

interface Props {

}

class BurgerBuilder extends Component<Props, State> {

    render() {
        return (
            <Aux>
                <Burger />
                <div>Burger Control</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
