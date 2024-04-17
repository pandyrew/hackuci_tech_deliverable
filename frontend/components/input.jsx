import React from 'react'

export const Input = () => {
  return (
    <div className="input">
        <div className="input-text-area">
            <div className="input-name">
                <div className="input-name-text">name:</div>
                <div className="input-name-field" />
            </div>
            <div className="input-description">
                <div className="input-description-text">quote:
                <div className='input-description-push'>

                </div>
                </div>
                <div className="input-description-field" />
            </div>
        </div>
        <div className="input-text-area">
            <div>
                <div className="input-text">
                    send a quote
                </div>
                <div className="input-under-text">
                    leave your mark on this world. change someones life
                </div>
            </div>
            <div className="input-submit">
                    submit
                </div>
        </div>
    </div>
  )
}

export default Input;
