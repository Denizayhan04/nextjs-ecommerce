"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchState {
  value: string
}

const initialState: searchState = {
  value: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchByInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { searchByInput } = searchSlice.actions

export default searchSlice.reducer