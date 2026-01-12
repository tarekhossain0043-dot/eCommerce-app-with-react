import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import img_1 from "../../assets/products/Image-1.png";
import img_2 from "../../assets/products/Image-2.png";

export const productData = [
  {
    id: nanoid(),
    name: "shoe",
    desc: "winter special for men",
    image: img_1,
    invent: 96,
    clr: "Black",
    price: 980,
    rating: 60,
  },

  {
    id: nanoid(),
    name: "Jacket",
    desc: "winter special for All",
    image: img_2,
    invent: 46,
    clr: "white",
    price: 580,
    rating: 30,
  },
];

// calculate next id
// const calculateNextId = (record) => {
//   if (!record || record.length === nanoid()) return nanoid();
//   return Math.max(...record.map((r) => r.id)) + nanoid();
// };

// load record from local storeage
const loadRecordFromStorage = () => {
  try {
    const saveRecords = localStorage.getItem("productRecord");
    return saveRecords ? JSON.parse(saveRecords) : productData;
  } catch (error) {
    console.error("Error loading record", error);
  }
};
const productSlice = createSlice({
  name: "product",
  initialState: {
    items: loadRecordFromStorage(),
    // nextId: calculateNextId(loadRecordFromStorage()),
  },
  reducers: {
    // add records
    addProduct: (state, action) => {
      const newRecord = { id: state.nextId, ...action.payload };
      state.items.push(newRecord);

      localStorage.setItem("productRecord", JSON.stringify(state.items));
      // state.nextId = calculateNextId(state.items);
    },

    deleteProduct: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((newProduct) =>
        id.includes(newProduct.id)
      );
      localStorage.setItem("productRecord", JSON.stringify(state.items));
      //   state.items = state.items.filter(
      // (item) => !idsToDelete.includes(item.id)
      // localStorage.setItem("productRecord", JSON.stringify(state.items));
    },

    updateProduct: (state, action) => {
      const updatedId = action.payload;
      const currentId = state.items.find((item) => item.id === updatedId);
      if (currentId !== -1) {
        state.items[currentId] = { ...state.items[currentId], ...updatedId };
      }
      localStorage.setItem("productRecord", JSON.stringify(state.items));
    },

    // reset all records
    resetAllRecords: (state) => {
      state.items = productData;
      // state.nextId = calculateNextId(productData);
      localStorage.setItem("productRecord", JSON.stringify(productData));
    },
  },
});
export const { addProduct, updateProduct, deleteProduct, resetAllRecords } =
  productSlice.actions;

// selectors
export const selectAllProducts = (state) => state.products.items;

export default productSlice.reducer;
