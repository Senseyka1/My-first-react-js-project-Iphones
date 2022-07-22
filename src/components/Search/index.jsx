import React, { useCallback, useState } from "react";
import styles from "./search.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/filter/slice";

import debounce from "lodash.debounce";

const Search = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const { search } = useSelector((state) => state.filter);
	// const updateQuery = (e) => dispatch(setSearch(e?.target?.value));

	// const debouncedOnChange = debounce(updateQuery, 250);
	const clearInput = () => {
		dispatch(setSearch(""));
		setValue("");
	};

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearch(str));
		}, 300),
		[]
	);

	const onChangeInput = (e) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	return (
		<>
			<input
				className={styles.searchInput}
				type="text"
				value={value}
				onChange={onChangeInput}
				placeholder="Поиск..."
			/>
			{search && (
				<span className={styles.clearInput} onClick={clearInput}>
					+
				</span>
			)}
		</>
	);
};

export default Search;
