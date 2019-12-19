import React from "react"
import { DynamicModuleLoader } from "redux-dynamic-modules-react"
import CounterPage from "./CounterPage"
import getCounterReducer from "./module"

export default function CounterModule() {
	return (
		<DynamicModuleLoader modules={[getCounterReducer()]}>
			<CounterPage />
		</DynamicModuleLoader>
	)
}