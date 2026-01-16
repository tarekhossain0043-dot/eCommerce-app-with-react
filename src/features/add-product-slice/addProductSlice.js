import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const orderProductData = [
  {
    id: nanoid(3),
    date: new Date().toISOString(),
    customer: "Tom Anderson",
    paymentStatus: "paid",
    orderStatus: "ready",
    price: "$49.90",
  },
  {
    id: nanoid(3),
    date: new Date().toISOString(),
    customer: "Tom Armstrong",
    paymentStatus: "unPaid",
    orderStatus: "unReady",
    price: "$99.90",
  },
  {
    id: nanoid(3),
    date: new Date().toISOString(),
    customer: "Takasur Anderson",
    paymentStatus: "paid",
    orderStatus: "ready",
    price: "$89.90",
  },
];

// calculate next id
const calculateNextId = (record) => {
  if (!record || record.length === 0) return nanoid(3);
  return Math.max(...record.map((r) => r.id)) + nanoid(3);
};

// load record from local storeage
const loadRecordFromStorage = () => {
  try {
    const saveRecords = localStorage.getItem("employeeRecords");
    return saveRecords ? JSON.parse(saveRecords) : orderProductData;
  } catch (error) {
    console.error("Error loading record", error);
  }
};
const recordSlice = createSlice({
  name: "record",
  initialState: {
    items: loadRecordFromStorage(),
    searchTerms: "",
    selectedIds: [],
    nextId: calculateNextId(loadRecordFromStorage()),
  },
  reducers: {
    // add records
    addRecord: (state, action) => {
      const newRecord = { id: state.nextId, ...action.payload };
      state.items.push(newRecord);

      localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },
    // update records
    updateRecords: (state, action) => {
      const { id, data } = action.payload;
      const index = state.items.find((r) => r.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
        localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      }
    },

    setSearchTerm: (state, action) => {
      state.searchTerms = action.payload;
    },
    // reset all records
    resetAllRecords: (state) => {
      state.items = orderProductData;
      state.nextId = calculateNextId(orderProductData);
      localStorage.setItem("employeeRecords", JSON.stringify(orderProductData));
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
        (p) => !state.selectedIds.includes(p.id)
      );
      state.selectedIds = [];
    },
  },
});
export const {
  addRecord,
  updateRecords,
  deleteSelected,
  toggleSelect,
  setSearchTerm,
  resetAllRecords,
} = recordSlice.actions;

// selectors
export const selectFilterRecords = (state) => {
  const term = state.records.searchTerms.toLowerCase();
  return state.records.items.filter(
    (r) =>
      r.date?.toLowerCase().includes(term) ||
      r.customer?.toLowerCase().includes(term) ||
      r.paymentStatus?.toLowerCase().includes(term) ||
      r.orderStatus?.toLowerCase().includes(term) ||
      r.price?.toLowerCase().includes(term)
  );
};

export default recordSlice.reducer;
