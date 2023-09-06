import React from "react";
import './filter.css'

export function Filter({ data, onChange, currentValue }) {


    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <ul className="filter-list">
            {
                data.map(({ id, value, label }) => {

                    return (
                        <li key={id}>
                            <div className="radio-buttons">
                                <label className="radio-button">
                                    <input
                                    type="radio" 
                                    id={id} 
                                    value={value} 
                                    onChange={handleChange}
                                    checked={(currentValue === value)} />
                                    <div className="radio-circle"></div>
                                    <span className="radio-label"> {label} </span>
                                </label>
                            </div>
                        </li>
                    )

                })
            }
        </ul>
    )
}

// Filtros cambian de valor dependiendo cual se seleccione <3

