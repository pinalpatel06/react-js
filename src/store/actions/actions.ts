export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addResult = (value: number) => {
    return {
        type: ADD,
        value: value
    }
}

export const add = (value: number) => {

    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(addResult(value));
        }, 2000);
    }

}

export const subtract = (value: number) => {
    return {
        type: SUBTRACT,
        value: value
    }
}

export const store_result = (value: number) => {
    return {
        type: STORE_RESULT,
        value: value
    }
}

export const remove_result = (value: number) => {
    return {
        type: DELETE_RESULT,
        value: value
    }
}