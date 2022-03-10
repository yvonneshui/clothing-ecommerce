import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop], //passing in an array of other selectors
  (shop) => shop.collections
); //creates memoized selector functions that only recalculate the output if the inputs change

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    //createSelector returns a function
    [selectShopCollections],
    (collections) => collections[collectionUrlParam] //find the collection with the routeName same as collectionUrlParam
  );
