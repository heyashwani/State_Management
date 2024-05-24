import { Action, createReducer, on } from '@ngrx/store';
import { saveData, saveData2 } from '../action/recharge.action';

interface IState{
    
}

export const customerFeatureKey = 'recharge';

export const initialState2 ={};

export const userReducer = createReducer(
    initialState2,
    
    on(saveData,(state:any,{array}) => ({...state,"mobile_recharge":array})),
    on(saveData2,(state,{array}) => ({...state,"tv_recharge":array}))
)

export function reducer(state:any | undefined, action: Action): any {
    return userReducer(state, action);
}