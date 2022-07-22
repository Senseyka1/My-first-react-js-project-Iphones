import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIphones = createAsyncThunk(
	"iphones/fetchByIdStatus",
	async ({ sort, page, searchValue, model, limit }) => {
		const { data } = await axios.get(
			`https://62b33b53a36f3a973d1e61db.mockapi.io/iphone?sortBy=price&order=${sort.order}&limit=${limit}&page=${page}${model}${searchValue}`
		);
		return data;
	}
);

export const fetchIphoneByMemory = createAsyncThunk(
	"iphoneByMemory/fetchByIdStatus",
	async ({ memory }) => {
		const { data } = await axios.get(
			`https://62b33b53a36f3a973d1e61db.mockapi.io/iphone?memory=${memory}`
		);
		return data;
	}
);

export const fetchIphoneByColor = createAsyncThunk(
	"iphoneByColor/fetchByIdStatus",
	async ({ color }) => {
		const { data } = await axios.get(
			`https://62b33b53a36f3a973d1e61db.mockapi.io/iphone?color=${color}`
		);
		return data;
	}
);

export const properties = {
	LOADING: "loading",
	SUCCESS: "success",
	ERROR: "error",
};

const initialState = {
	items: [],
	status: properties.LOADING | properties.SUCCESS | properties.ERROR,
};

const iphonesSLice = createSlice({
	name: "iphones",
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchIphones.pending, (state) => {
			state.status = properties.LOADING;
			state.items = [];
		});
		builder.addCase(fetchIphones.fulfilled, (state, action) => {
			state.status = properties.SUCCESS;
			state.items = action.payload;
		});
		builder.addCase(fetchIphones.rejected, (state) => {
			state.items = properties.ERROR;
			state.items = [];
		});

		builder.addCase(fetchIphoneByMemory.pending, (state) => {
			state.status = properties.LOADING;
			state.items = [];
		});
		builder.addCase(fetchIphoneByMemory.fulfilled, (state, action) => {
			state.status = properties.SUCCESS;
			state.items = action.payload;
		});
		builder.addCase(fetchIphoneByMemory.rejected, (state) => {
			state.items = properties.ERROR;
			state.items = [];
		});

		builder.addCase(fetchIphoneByColor.pending, (state) => {
			state.status = properties.LOADING;
			state.items = [];
		});
		builder.addCase(fetchIphoneByColor.fulfilled, (state, action) => {
			state.status = properties.SUCCESS;
			state.items = action.payload;
		});
		builder.addCase(fetchIphoneByColor.rejected, (state) => {
			state.items = properties.ERROR;
			state.items = [];
		});
	},
});

export const { setItems } = iphonesSLice.actions;

export default iphonesSLice.reducer;
