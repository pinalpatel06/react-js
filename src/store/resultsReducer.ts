import {Action, StateResults, State } from "./interfaces";
import * as actionsType from "./actions";

const initialState = {
        result: [],
};

const reducer = (state: StateResults = initialState, action: Action) => {
    if (action.type === actionsType.STORE_RESULT && action.value !== undefined ) {
        console.log('store', state);
        const updatedState = {
            ...state,
            result: state.result.concat(action.value)
        }
        console.log(updatedState);
        return updatedState;
    } else if (action.type === actionsType.DELETE_RESULT && action.value !== undefined) {

        const res = state.result.filter(res => res !== action.value);
        console.log(state, action.value)
        return {
            ...state,
            result: res
        }
    }

    return state;
}

export default reducer;