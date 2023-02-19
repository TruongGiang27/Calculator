// import { createReducer, on, State } from '@ngrx/store'
// import { decrement, increment, reset } from '../actions/counter.actions';

// export const initialState = 0;

// const _conterReducer = createReducer(initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1),
//     on(reset, State => 0),
// );

// export function conterReducer(state:any , action:any){
//     return _conterReducer(state, action);
// }

import { createReducer, on, State } from '@ngrx/store'
import * as CouterAction from '../actions/counter.actions';
import {Calcu} from '../models/calcu.model'

const initialState:Calcu={
    curentnumber:0,
}

const _conterReducer = createReducer(initialState,
    on(CouterAction.seven, (state,action)=>{
        return {
            ...state,
            curentnumber: action.number,
        }
    }),
);

export function conterReducer(state:any , action:any){
    return _conterReducer(state, action);
}