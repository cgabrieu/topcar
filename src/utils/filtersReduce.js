export const initialStateFilters = {
	UF: [],
	model: [],
	color: [],
};

export default function filtersReduce(currentState, action) {
	if (action.filterType === 'reset') return initialStateFilters;

	const filtersList = currentState[action.filterType];

	const hasValue = filtersList.includes(action.option);
	const addValue = () => [...filtersList, action.option];
	const removeValue = () =>
		filtersList.filter((option) => option !== action.option);

	return {
		...currentState,
		[action.filterType]: hasValue ? removeValue() : addValue(),
	};
}
