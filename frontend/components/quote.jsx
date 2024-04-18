import React from 'react'

export const Quotes = ({ quote, index }) => {
    return (
        <div key={index} className="quote">
            <p>{quote.name}:</p>
            <p>"{quote.message}"&nbsp;-&nbsp;{quote.time.slice(0, 10)}</p>
        </div>
    )
}

export default Quotes;
