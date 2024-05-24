import { createFeatureSelector, createSelector } from "@ngrx/store";
import { customerFeatureKey } from "../reducer/money-transfer.reducer";

export const selectUser = createSelector(
    createFeatureSelector(customerFeatureKey),
  (state:any) => state
);