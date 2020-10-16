export interface StateCounter {
    counter: number;
}

export interface State {
    ctr: StateCounter;
    res: StateResults
}

export interface StateResults {
    result: any[];
}

export interface Action {
    type: string;
    value?: number | undefined;
}