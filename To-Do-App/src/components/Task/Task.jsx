import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './task.css'

export function Task({ data, onToggle, onDelete }) {

    const handleDelete = (idDelete) => {
        onDelete(idDelete)
    }

    const handleToggle = (inputToggle) => {
        onToggle(inputToggle)
    }

    return (
        <ul className='task-list'>
            {
                data.map(items => <TaskCard key={items.id} info={items} onToggle={handleToggle} onDelete={handleDelete} />)

            }

        </ul>
    )
}

function TaskCard({ info, onToggle, onDelete }) {

    const { id, title, complete } = info

    const handleChange = ({target}) => {
        onToggle(
            {
                complete : target.checked,
                id
            }
        )
    }

    const handleDelete = () => {
        console.log('Task Deleted Succesfully');
        onDelete(id)
    }

    return (
        <li key={id}>
            <div className="task-container" >
                <input className="checkbox-task"
                    type="checkbox"
                    checked={complete}
                    onChange={handleChange} />

                <h3 className="task-title">{title}</h3>

                <button className="delete-button" onClick={handleDelete} >
                    <FontAwesomeIcon icon={faTrash} /></button>

            </div>
        </li>
    )
}
