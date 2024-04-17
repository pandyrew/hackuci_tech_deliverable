import "./App.css";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Quotes from "../components/quote";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Input from "../components/input";

function App() {
	const [quotesData, setQuotesData] = useState({});
	useEffect(() => {
        const getData = async () => {
            const quotes = await axios.get('/api/quote');
            setQuotesData(quotes.data);
        };
        getData();
    }, []);

	
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="View">
				<div className="Inside">
					<Hero></Hero>
					<Input></Input>
				</div>
			</div>
			
		</div>
	);
}

export default App;
