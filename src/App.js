import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage, ChatPageA, ChatPageB, ChatPageC, ChatPageD} from "./screens";

function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/chatA" component={ChatPageA} />
				<Route path="/chatB" component={ChatPageB} />
				<Route path="/chatC" component={ChatPageC} />
				<Route path="/chatD" component={ChatPageD} />
			</Switch>
		</Router>
	);
}

export default App;
