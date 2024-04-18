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

	useEffect(() => {
        const getData = async () => {
            const quotes = await axios.get('/api/quote');
            setQuotesData(quotes.data);
			console.log(quotes.data)
        };
        getData();
    }, [submitCount]);
	async function handleSubmit(userName, quote) {
        const res = await axios.post('/api/quote', {name: userName, message: quote});
        console.log(res)
        setSubmitCount(prevCount => prevCount + 1);
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

			</div>
			
		</div>
	);
}

export default App;
