import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = "http://localhost:5000/";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: api }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    // deleteProducts : builder.mutation({
    //   query : (id) =>
    // })
  }),
});

export const {
  useGetProductQuery,
  useAddProductsMutation,
  useDeleteProductMutation,
} = apiSlice;
