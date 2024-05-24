import { Action, createReducer, on } from '@ngrx/store';
import { saveData, saveData2 } from '../action/money-transfer.action';

export const customerFeatureKey = 'money-transfer';

export const initialState2:any =0;

export const userReducer = createReducer(
    initialState2,
    
    on(saveData,(state:any,{array}) => ({...state,"bank_to_bank":array})),
    on(saveData2,(state,{array}) => ({...state,"wallet_to_bank":array}))
)

export function reducer(state:any | undefined, action: Action): any {
    return userReducer(state, action);
}