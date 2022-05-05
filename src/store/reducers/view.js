import { createSlice } from '@reduxjs/toolkit'

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    collapsed: false
  },
  reducers: {
    toggleCollapsed: (state, action) => {
      state.collapsed = !state.collapsed
    }
  }
})
export const collapsed = (state) => state.collapsed;
export const { toggleCollapsed } = viewSlice.actions;
export default viewSlice.reducer