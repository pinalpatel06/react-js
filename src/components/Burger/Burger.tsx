import React, { Component } from 'react';
import './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


class Burger extends Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return (
            <div className="Burger">
                <BurgerIngredient type="bread-top"/>
                <BurgerIngredient type="Cheese"/>
                <BurgerIngredient type="Meat"/>
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );
    }
}

export default Burger;