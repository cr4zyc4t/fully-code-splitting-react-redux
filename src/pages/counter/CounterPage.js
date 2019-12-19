import React, { useCallback, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";

export default function CounterPage() {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();
	const input1Ref = useRef(null);
	const input2Ref = useRef(null);

	const handleDecrease = useCallback(() => dispatch({ type: "COUNTER_DECREASE", payload: parseInt(input1Ref.current.value, 10) }), [dispatch])
	const handleIncrease = useCallback(() => dispatch({ type: "COUNTER_INCREASE", payload: parseInt(input2Ref.current.value, 10) }), [dispatch])

	return (
		<div>
			<input ref={input1Ref} type="number" defaultValue="0" />
			<button onClick={handleDecrease}>Decrease</button>
			<span className="counter">{counter}</span>
			<button onClick={handleIncrease}>Increase</button>
			<input ref={input2Ref} type="number" defaultValue="0" />
			<style jsx>{`
				button {
					background: none;
					border: none;
					outline: none;
					padding: 10px 16px;
					box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
				}
				button:hover {
					box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
				}
				button:active {
					box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
				}
				.counter {
					margin: 10px;
				}
				input {
					width: 30px;
					padding: 10px 14px;
					margin: 0px 8px;
				}
			`}</style>
		</div>
	)
}