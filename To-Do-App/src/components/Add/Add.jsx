import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './add.css'
import { useState } from "react";


const inputInicial = ''

export function Add({onSubmit}) {

    const [inputValue, setInputValue] = useState(inputInicial)
    const [btnState, setBtnState] = useState(true)

    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value)

        setBtnState(value.trim() === '')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(inputValue)
        setInputValue(inputInicial)
        setBtnState(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="New Task"
                        id="input-add" >
                    </input>

                    <button id="add-button"
                        type="submit"
                        disabled={btnState} >
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faPlus} />Add
                        </div>
                    </button>
                </div>
            </form>
        </>
    )
}