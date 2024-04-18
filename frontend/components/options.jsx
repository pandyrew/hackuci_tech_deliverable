import React from 'react'

export const Options = ({ handleClick} ) => {

  return (
    <div className="options">
        <div>filter:</div>
        <div className="options-block">
            <div onClick={handleClick('week')}className="options-times">
                1 week ago
            </div>
            <div onClick={handleClick('month')} className="options-times">
                1 month ago
            </div>
            <div onClick={handleClick('year')} className="options-times">
                1 year ago
            </div>
            <div onClick={handleClick('5')} className="options-times">
                5 years ago
            </div>
            <div onClick={handleClick('100')} className="options-times">
                100 years ago
            </div>
        </div>

    </div>
  )
}

export default Options;