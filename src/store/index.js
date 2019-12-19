import { createStore } from "redux-dynamic-modules-core";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import { getSagaExtension } from "redux-dynamic-modules-saga";
// import getCounterReducer from "./reducers/counter";

export function createReduxStore() {
	return createStore(
		{
			extensions: [getThunkExtension(), getSagaExtension()],
		},
		// getCounterReducer()
	)
}