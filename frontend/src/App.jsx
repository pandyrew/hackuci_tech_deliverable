import "./App.css";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Quotes from "../components/quote";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Input from "../components/input";
import Options from "../components/options";

function App() {
	const [quotesData, setQuotesData] = useState({});
    const [submitCount, setSubmitCount] = useState(0);
	console.log('dont log more than once');

	const getData = async (time = null) => {
		console.log(quotesData)
			const url = time ? `/api/quote?time_period=${time}` : '/api/quote';
            const quotes = await axios.get(url);
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
	function handleClick(time){
        return async () => {
            console.log(time)
			await getData(time);
        }
    }

	
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="View">
				<div className="Inside">
					<Hero></Hero>
					<Input handleSubmit={handleSubmit}></Input>
					<div className="quote-book">quote book<div></div></div>
					<Options handleClick={handleClick}></Options>
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
