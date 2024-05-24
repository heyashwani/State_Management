import { createAction, props } from '@ngrx/store';


export const saveData = createAction('[bank-to-bank Component] saveData',props<{ array: any[] }>());

export const saveData2 = createAction('[wallet-to-bank Component] saveData2',props<{ array: any[] }>());