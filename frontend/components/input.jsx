import React, { useState } from 'react'
import axios from 'axios';

export const Input = ({ handleSubmit }) => {
    const [userName, setUserName] = useState('');
    const [quote, setQuote] = useState('');
    const [submitCount, setSubmitCount] = useState(0);
    function handleChangeQuote(e) {
        setQuote(e.target.value);
        console.log(quote)
    }
    function handleChangeName(e) {
        setUserName(e.target.value);
        console.log(userName)
    }

  return (
    <div className="input">
        <div className="input-text-area">
            <div className="input-name">
                <div className="input-name-text">name:</div>
                <textarea type="text"  onChange={(e)=>handleChangeName(e)} rows='1' className="input-name-field" />
            </div>
            <div className="input-description">
                <div className="input-description-text">quote:
                <a className='input-description-push'>

                </a>
                </div>
                <textarea type="text" onChange={(e)=>handleChangeQuote(e)} className="input-description-field" />
            </div>
        </div>
        <div className="input-text-area">
            <div>
                <div className="input-text">
                    send a quote
                </div>
                <div className="input-under-text">
                    leave your mark on this world. change someones life.
                </div>
            </div>
            <a onClick={() => handleSubmit(userName, quote)} className="input-submit">
                    submit
            </a>
        </div>
    </div>
  )
}

export default Input;
