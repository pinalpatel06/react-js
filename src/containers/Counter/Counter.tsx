import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsType from "../../store/actions";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { State, Action, StateCounter, StateResults } from '../../store/interfaces';

interface Props {
    ctr: number,
    results: any[],
    onIncrCounter: () => void;
    onDesrCounter: () => void;
    onAdd: () => void;
    onSUb: () => void;
    onStoreResult: (val: number) => void;
    onDeleteResult: (res: number) => void;
};

class Counter extends Component<Props, StateCounter> {

    constructor(props: Props) {
        super(props);
        console.log(props);
    }

    counterChangedHandler = (action: string, value = 0) => {
        switch (action) {
            case 'inc':
                this.setState((prevState: StateCounter) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState: StateCounter) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState: StateCounter) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState: StateCounter) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDesrCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSUb} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {
                        this.props.results.map(result => {
                            return (
                                <li onClick={() => this.props.onDeleteResult(result)}>{result}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        ctr: state.ctr.counter,
        results: state.res.result
    } as Props
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrCounter: () => dispatch({ type: actionsType.INCREMENT }),
        onDesrCounter: () => dispatch({ type: actionsType.DECREMENT }),
        onAdd: () => dispatch({ type: actionsType.ADD, value: 10 }),
        onSUb: () => dispatch({ type: actionsType.SUBTRACT, value: 10 }),
        onStoreResult: (val: number) => dispatch({ type: actionsType.STORE_RESULT, value: val }),
        onDeleteResult: (id: number) => dispatch({ type: actionsType.DELETE_RESULT, value: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);