import { configureStore } from "@reduxjs/toolkit";
import getAuthSlice from "./authSlice/authSlice";
import getTagSlice from "./tagSlice/tagSlice";
import getCategorySlice from "./createCategorySlice/categorySlice";
import getRecordSlice from "./add-product-slice/addProductSlice";
import getProductSlice from "./product-slice/productSlice";
const store = configureStore({
  reducer: {
    authentication: getAuthSlice,
    tags: getTagSlice,
    newCategory: getCategorySlice,
    records: getRecordSlice,
    products: getProductSlice,
  },
});

export default store;
