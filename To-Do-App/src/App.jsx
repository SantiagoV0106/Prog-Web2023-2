import React from "react";
import { Header, Add, Task, Filter, Footer } from "./components";
import { useState } from "react";

const initialTask = []

export function App() {

    const [task, setTask] = useState(initialTask)
    const [filter, setFilter] = useState('all')

    const filterData = [
        {
            id: crypto.randomUUID(),
            value: 'all',
            label: 'All',

        },

        {
            id: crypto.randomUUID(),
            value: 'completed',
            label: 'Completed',
        },
        {
            id: crypto.randomUUID(),
            value: 'pending',
            label: 'Pending',
        }

    ]

    const createTask = (title) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            complete: false
        }

        setTask(prevState => [...prevState, newTask])

    }

    const handleToggle = (inputToggle) => {
        const { id, complete } = inputToggle

        const newTaskInput = task.map(inputToggle => {

            if (inputToggle.id === id) {
                const newTask = {
                    ...inputToggle,
                    complete
                }
                return newTask
            }
            return inputToggle
        })
        setTask(newTaskInput)
    }

    const handleDelete = (idDelete) => {
        const newTasks = task.filter((info) => info.id !== idDelete)
        setTask(newTasks)
    }

    const handleFilterChange = (filterValue) => {
        console.log(filterValue);
        setFilter(filterValue)
    }

    // Validación de si hay tareas o no UwU <3

    const hasTask = task.length > 0

    const filteredTasks = task.filter((info) => {
        if (filter === 'completed') {
            return info.complete
        }

        if (filter === 'pending') {
            return !info.complete
        }
        else return info
    })

    const totalTasks = task.length
    console.log(`Total tasks : ${totalTasks} `);

    const completedTasks = task.filter((info) => {
        if (info.complete === true) {
            return info
        }
    })

    const cTasksLength = completedTasks.length
    console.log(`Total completed tasks : ${cTasksLength} `);


    const handleAllDelete = () => { 
        const newTasks = task.filter((info) => info > 0 === initialTask)
        setTask(newTasks)
    }

    return (
        <>
            <Header />
            <Add onSubmit={createTask} />
            <Filter data={filterData}
                onChange={handleFilterChange}
                currentValue={filter} />
            {
                hasTask ?
                    <Task data={filteredTasks}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    /> :
                    <h1 id="no-task-msn" >No Tasks Yet</h1>
            }
            <Footer total={totalTasks} completed={cTasksLength} onDeleteAll={handleAllDelete} />
        </>
    )
}