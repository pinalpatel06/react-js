import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

interface Props {
    location: any;
    history: any;
    match: any;
    ingredients?: { [key: string]: number; } | null;
    totalPrice: number,
}
interface State {
    ingredients: any | null;
    price?: number;
    totalPrice: number;
}

class Checkout extends Component<Props, State> {
    // state = {
    //     ingredients: {
    //         salad: 0
    //     },
    //     price: 0,
    //     totalPrice: 0
    // }

    constructor(props: Props) {
        super(props);
    }

    // componentWillMount() {
    //     const query: any = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     let param: string[];
    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             // ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ ingredients: ingredients, totalPrice: price });
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                   components={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);