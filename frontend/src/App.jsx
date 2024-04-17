import "./App.css";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Quotes from "../components/quote";

function App() {
	const [quotesData, setQuotesData] = useState({});
	useEffect(() => {
        const getData = async () => {
            const quotes = await axios.get('/api/quote');
            setQuotesData(quotes.data);
			console.log(quotesData);
        };
        getData();
    }, []);

	
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{Object.entries(quotesData).map(([key, value]) => (
    				<Quotes key={key} singleQuote={value} />
				))}
			</div>
		</div>
	);
}

export default App;
