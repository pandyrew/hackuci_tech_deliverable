import React from 'react'

export const Quotes = ({ quote, index }) => {
    return (
        <div key={index} className="quote">
            <p className="quote-name">{quote.name}:</p>
            <p>"{quote.message}"<span className="quote-time">&nbsp;-&nbsp;{quote.time.slice(0, 10)}</span></p>
        </div>
    )
}

export default Quotes;
