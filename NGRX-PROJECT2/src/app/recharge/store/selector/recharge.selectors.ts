import { createFeatureSelector, createSelector } from "@ngrx/store";
import { customerFeatureKey } from "../reducer/recharge.reducer";

export const selectUser = createSelector(
    createFeatureSelector(customerFeatureKey),
  (state:any) => state
);