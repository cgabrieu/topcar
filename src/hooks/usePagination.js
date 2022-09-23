import { useState } from 'react';

const itemsPerPage = 10;

function usePagination(data) {
	const [currentPage, setCurrentPage] = useState(1);

	const maxPage = Math.ceil(data.length / itemsPerPage);

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;

		return data.slice(begin, end);
	}

	function next() {
		setCurrentPage((currPage) => Math.min(currPage + 1, maxPage));
	}

	function prev() {
		setCurrentPage((currPage) => Math.max(currPage - 1, 1));
	}

	function goTo(page) {
		const pageNumber = Math.max(1, page);
		setCurrentPage(() => Math.min(pageNumber, maxPage));
	}

	function reset() {
		goTo(1);
	}

	return {
		next,
		prev,
		goTo,
		reset,
		currentData,
		currentPage,
		maxPage,
	};
}

export default usePagination;
