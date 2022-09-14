import { useState } from 'react';
import { getCarsByRange, getInfoCars } from 'pages/Home/Home.service';

const itemsPerPage = 10;

function useCarsListPagination() {
	const [currentPage, setCurrentPage] = useState(1);

	const quantityCars = getInfoCars().quantity;
	const maxPage = Math.ceil(quantityCars / itemsPerPage);

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return getCarsByRange(begin, end).data;
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

	return { next, prev, goTo, currentData, currentPage, maxPage };
}

export default useCarsListPagination;
