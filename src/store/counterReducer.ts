import { StateCounter, Action } from "./interfaces";
import * as actionsType from "./actions/actions";

const initialState = {
    counter: 0,
};

const reducer = (state: StateCounter = initialState, action: Action) => {
    console.log(state)
    if (action.type === actionsType.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === actionsType.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === actionsType.ADD && action.value) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if (action.type === actionsType.SUBTRACT && action.value) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }

    return state;
}

export default reducer;