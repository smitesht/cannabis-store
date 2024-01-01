import { createSlice } from "@reduxjs/toolkit";
import CannabisData from "../cannabis.json";

const initialState = {
  products: CannabisData.products,
  best_seller_flowers: CannabisData.flowers,
  best_seller_pre_rools: CannabisData.smoke,
  best_seller_vapes: CannabisData.vape,
  categoryProducts: [],
  selectedProduct: {},
  breadcrum: {},
};

const productSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    getProductsByCategory: (state, action) => {
      state.categoryProducts = CannabisData.products.filter(
        (data) => data.type === action.payload
      );
    },

    selectProduct: (state, action) => {
      const id = action.payload;
      const prod = CannabisData.products.filter((data) => data.id == id);
      if (prod[0]) {
        state.selectedProduct = prod[0];
        const bc = {
          home: "Home",
          home_url: "/",
          category: prod[0].type,
          category_url: "/" + prod[0].type,
          product_name: prod[0].title,
        };
        state.breadcrum = bc;
      }
    },
  },
});

export const { getProductsByCategory, selectProduct } = productSlice.actions;
export default productSlice.reducer;
