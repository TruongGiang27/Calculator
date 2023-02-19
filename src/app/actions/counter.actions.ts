import {  createAction, props  } from '@ngrx/store'

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] decrement');
// export const reset = createAction('[Counter Component] reset');

export const seven = createAction('[Counter Component] seven',props<{number:number}>());
export const eight = createAction('[Counter Component] Eight');
export const nine = createAction('[Counter Component] Nine');
export const division = createAction('[Counter Component] division');

export const four = createAction('[Counter Component] Four');
export const five = createAction('[Counter Component] Five');
export const six = createAction('[Counter Component] Six');
export const multi = createAction('[Counter Component] multi');

export const one = createAction('[Counter Component] One');
export const two = createAction('[Counter Component] Two');
export const three = createAction('[Counter Component] Three');
export const sub = createAction('[Counter Component] sub');

export const zero = createAction('[Counter Component] Zero');
export const del = createAction('[Counter Component] del');
export const equal_sign = createAction('[Counter Component] equal_sign');
export const plus = createAction('[Counter Component] plus');
