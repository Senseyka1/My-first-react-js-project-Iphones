import axios from "axios";
import { properties } from "../iphones/slice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTotalPrice } from "../../components/utils/getTotalPrice";

// export const fetchIphonesForCart = createAsyncThunk("iphonesForCart/fetchByIdStatus", async () => {
// 	const { data } = await axios.get(`https://62b33b53a36f3a973d1e61db.mockapi.io/cart`);
// 	return data;
// });

const initialState = {
	items: [],
	totalCount: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({ ...action.payload, count: 1 });
			}

			state.totalPrice = getTotalPrice(state.items);
			state.totalCount = state.items.length;
		},
		minusItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload);

			if (findItem) {
				findItem.count--;
			}

			state.totalPrice = getTotalPrice(state.items);
		},
		removeItem(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
			state.totalPrice = getTotalPrice(state.items);
			// axios.delete(`https://62b33b53a36f3a973d1e61db.mockapi.io/cart/${action.payload}`);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},

	// extraReducers: (builder) => {
	// 	builder.addCase(fetchIphonesForCart.pending, (state) => {
	// 		state.status = properties.LOADING;
	// 		state.items = [];
	// 	});
	// 	builder.addCase(fetchIphonesForCart.fulfilled, (state, action) => {
	// 		state.status = properties.SUCCESS;
	// 		state.items = action.payload;
	// 	});
	// 	builder.addCase(fetchIphonesForCart.rejected, (state) => {
	// 		state.items = properties.ERROR;
	// 		state.items = [];
	// 	});
	// },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
