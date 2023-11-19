import { options } from '../../const/filterOptions'
import { useDash } from '../../hooks/useDash'
import { IoFilter } from "react-icons/io5";
import './filter.css'

export function Filter() {

    const { filterValue, onFilterChange } = useDash()

    const handleOnSelectChange = ({ target }) => {
        onFilterChange(target.value)
    }

    return (
        <div className="filter-container">
            <div className="filter-by-gen">
                <label htmlFor="filter"> <IoFilter /> </label>
                <select name="filter" id="filter" onChange={handleOnSelectChange} value={filterValue} >
                    {
                        options.map(({ id, label, value }) => {
                            return (
                                <option
                                    className='select-options'
                                    key={id}
                                    value={value}
                                    // selected={(filterValue === value)}
                                >
                                    {label}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}