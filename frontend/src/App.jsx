import "./App.css";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Quotes from "../components/quote";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Input from "../components/input";

function App() {
	const [quotesData, setQuotesData] = useState({});
    const [submitCount, setSubmitCount] = useState(0);
	console.log('dont log more than once');

	const getData = async () => {
            const quotes = await axios.get('/api/quote');
            setQuotesData(quotes.data);
			console.log(quotes.data)
        };


	useEffect(() => {
        getData();
    }, [submitCount]);

	async function handleSubmit(userName, quote) {
		if (userName === '' || quote === '') {
			return;
		}
		getData();
        await axios.post('/api/quote', {name: userName, message: quote});
        setSubmitCount(prevCount => prevCount + 1);
		console.log('submitted')
    }
	const quotesArray = Object.values(quotesData);

	
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="View">
				<div className="Inside">
					<Hero></Hero>
					<Input handleSubmit={handleSubmit}></Input>
					<div className="quote-book">quote book</div>
					{quotesArray.map((quote, index) => (
                    	<Quotes key={index} quote={quote}></Quotes>
                	))}
				</div>
				<div className="Footer">made by andrew. this is a foot</div>
			</div>
		</div>
	);
}

export default App;
