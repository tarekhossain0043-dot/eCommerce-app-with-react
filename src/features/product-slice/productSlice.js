import { createSelector, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import img_1 from "../../assets/products/Image-1.png";
import img_2 from "../../assets/products/Image-2.png";

export const productData = [
  {
    id: nanoid(),
    name: "shoe",
    desc: "winter special for men",
    image: img_1,
    invent: "out stock",
    clr: "Black",
    price: 980,
    rating: 60,
  },

  {
    id: nanoid(),
    name: "Jacket",
    desc: "winter special for All",
    image: img_2,
    invent: "In stock",
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
// calculate next id
const calculateNextId = (record) => {
  if (!record || record.length === 0) return nanoid(3);
  return Math.max(...record.map((r) => r.id)) + nanoid(3);
};

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
    searchTerms: "",
    selectedIds: [],
    // updating
    editingProduct: null,
    // pagination
    currentPage: 1,
    itemsPerPage: 5,
    // nextId: calculateNextId(loadRecordFromStorage()),
  },
  reducers: {
    // add records
    addProduct: (state, action) => {
      const newProduct = { id: state.nextId, ...action.payload };
      state.items.push(newProduct);

      localStorage.setItem("productRecord", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },
    setSearchTerm: (state, action) => {
      state.searchTerms = action.payload;
    },

    // multiple select product
    toggleSelect: (state, action) => {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((itemId) => itemId !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
    clearSelection: (state) => {
      state.selectedIds = [];
    },
    deleteSelected: (state) => {
      state.items = state.items.filter(
        (p) => !state.selectedIds.includes(p.id),
      );
      state.selectedIds = [];
    },

    deleteProduct: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((newProduct) =>
        id.includes(newProduct.id),
      );
      localStorage.setItem("productRecord", JSON.stringify(state.items));
      //   state.items = state.items.filter(
      // (item) => !idsToDelete.includes(item.id)
      // localStorage.setItem("productRecord", JSON.stringify(state.items));
    },

    updateProduct: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((p) => p.id === updated.id);
      if (index !== -1) {
        state.items[index] = updated;
        localStorage.setItem("productRecord", JSON.stringify(state.items));
      }
      state.editingProduct = null;
      state.selectedIds = [];
    },
    // product editing
    editingProduct: (state, action) => {
      state.editingProduct = action.payload;
      localStorage.setItem("productRecord", JSON.stringify(state.items));
    },
    clearEditingPro: (state) => {
      state.editingProduct = null;
    },

    // reset all records
    resetAllRecords: (state) => {
      state.items = productData;
      // state.nextId = calculateNextId(productData);
      localStorage.setItem("productRecord", JSON.stringify(productData));
    },
    // pagination
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem("productRecord", JSON.stringify(state.items));
    },
  },
});
export const {
  addProduct,
  updateProduct,
  deleteSelected,
  toggleSelect,
  editingProduct,
  clearEditingPro,
  clearSelection,
  setSearchTerm,
  setCurrentPage,
} = productSlice.actions;

// selectors
// export const selectFilterProducts = (state) => {
//   const term = state.products.searchTerms.toLowerCase();
//   return state.products.items.filter(
//     (r) =>
//       r.name?.toLowerCase().includes(term) ||
//       r.desc?.toLowerCase().includes(term) ||
//       r.image?.toLowerCase().includes(term) ||
//       r.invent?.toLowerCase().includes(term) ||
//       r.clr?.toLowerCase().includes(term) ||
//       r.price?.toLowerCase().includes(term) ||
//       r.rating?.toLowerCase().includes(term),
//   );
// };
const selectItems = (state) => state.products.items;
const selectSearchTerm = (state) => state.products.searchTerms.toLowerCase();
export const selectFilterProducts = createSelector(
  [selectItems, selectSearchTerm],
  (items, term) => {
    if (!term) return items;

    return items.filter(
      (r) =>
        r.name?.toLowerCase().includes(term) ||
        r.desc?.toLowerCase().includes(term) ||
        r.image?.toLowerCase().includes(term) ||
        r.invent?.toLowerCase().includes(term) ||
        r.clr?.toLowerCase().includes(term) ||
        String(r.price)?.toLowerCase().includes(term) ||
        r.rating?.toLowerCase().includes(term),
    );
  },
);
// pagination
export const getTotalPage = (state) => {
  const items = state.products?.items ?? [];
  const perPage = state.products?.itemsPerPage ?? 1;
  return Math.ceil(items.length / perPage);
};
export const selectAllProducts = (state) => state.products.items;
export default productSlice.reducer;
