import "./App.css";
import axios from "axios";
import React, { useEffect, useState} from "react";
import Quotes from "../components/quote";
import Navbar from "../components/navbar";

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
			{/* TODO: include an icon for the quote book */}
			<Navbar></Navbar>
			<div className="Inside">
			hi
			</div>
			
		</div>
	);
}

export default App;
