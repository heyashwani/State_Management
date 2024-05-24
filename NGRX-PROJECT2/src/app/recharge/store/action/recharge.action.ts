import { createAction, props } from '@ngrx/store';


export const saveData = createAction('[mobile-recharge Component] saveData',props<{ array: any[] }>());

export const saveData2 = createAction('[tv-recharge Component] saveData2',props<{ array: any[] }>());