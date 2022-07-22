import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: "",
	page: 1,
	modelId: 0,
	sort: {
		id: 0,
		name: "цена по убыванию",
		sortBy: "price",
		order: "desc",
	},
};

const filterSLice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSearch(state, action) {
			state.search = action.payload;
		},
		setPage(state, action) {
			state.page = action.payload;
		},
		setModelId(state, action) {
			state.modelId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
	},
});

export const { setSearch, setPage, setModelId, setSort, setDes } = filterSLice.actions;

export default filterSLice.reducer;
