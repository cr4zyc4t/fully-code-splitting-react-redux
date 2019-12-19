import React, { lazy, Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import css from "styled-jsx/css";

const CounterPage = lazy(() => import("./pages/counter"));
const HackerNews = lazy(() => import("./pages/hacker-news"));
const Weather = lazy(() => import("./pages/weather"));

const navItem = css.resolve`
	a {
		text-decoration: none;
		padding: 10px;
		color: #fff;
	}

	a:hover {
		background-color: rgba(0,0,0,0.1);
	}

	a.active {
		background-color: rgba(0,0,0,0.2);
	}
`;

export default function App() {
	return (
		<div className="wrapper">
			<div className="main-nav">
				<NavLink className={navItem.className} exact to="/">Home</NavLink>
				<NavLink className={navItem.className} to="/counter">Counter</NavLink>
				<NavLink className={navItem.className} to="/hacker-news">Hacker News</NavLink>
				<NavLink className={navItem.className} to="/weather">Weather</NavLink>
			</div>
			<div className="content-wrapper">
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/counter" component={CounterPage} />
						<Route path="/hacker-news" component={HackerNews} />
						<Route path="/weather" component={Weather} />
						<Route component={() => <div>404</div>} />
					</Switch>
				</Suspense>
			</div>
			<style jsx>{`
				.wrapper {
					height: 100vh;
					width: 100vw;
				}
				.main-nav {
					background-color: #2196f3;
					color: white;
					padding: 10px;
				}
				.content-wrapper {
					padding: 15px;
				}
			`}</style>
			{navItem.styles}
		</div>
	)
}