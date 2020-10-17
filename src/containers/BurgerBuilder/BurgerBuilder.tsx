import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import * as actionsType from '../../store/actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

interface State {
    ingredients?: { [key: string]: number; } | null;
    purchasable?: boolean;
    loading?: boolean,
    error?: boolean
    purchasing: boolean;    
}

interface Props {
    ingredients?: { [key: string]: number; } | null;
    totalPrice: number,
    history: any;
    onIngredientAdded: (name: string) => void;
    onIngredientRemove: (name:string) => void;
}

class BurgerBuilder extends Component<Props, State> {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 1,
            bacon: 0
        },
        purchasing: false,
        totalPrice: 4,
        purchasable: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // console.log(this.props);
        // axios.get('https://react-my-burger.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     })
        //     .catch(error => {
        //         this.setState({ error: true });
        //     });
    }

    updatePurchaseState() {
        const sum = Object.keys(this.props.ingredients)
            .map(igKey => {
                return this.props.ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            console.log('Sum',sum)
        return  sum > 0 ;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        let key: 'salad' | 'cheese' | 'meat' | 'bacon';
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 ? -1 : disabledInfo[key];
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState()}
                        ordered={this.purchaseHandler}
                        price={this.props.totalPrice} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateTorRops = (state: any) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    } as Props
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIngredientAdded: (name) => dispatch({ type: actionsType.ADD_INGREDIENT, payload: name }),
        onIngredientRemove: (name) => dispatch({ type: actionsType.REMOVE_INGREDIENT, payload: name })
    }
}

export default connect(mapStateTorRops, mapDispatchToProps)(BurgerBuilder);