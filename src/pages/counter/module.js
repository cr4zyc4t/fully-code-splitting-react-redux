function counterReducer(state = 0, action) {
	switch (action.type) {
		case 'COUNTER_INCREASE':
			return state + action.payload;
		case 'COUNTER_DECREASE':
			return state - action.payload;
		default:
			return state;
	}
}

export default function getCounterReducer() {
	return {
		id: "counter",
		reducerMap: {
			counter: counterReducer
		}
	}
}