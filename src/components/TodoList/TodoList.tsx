import React, { useState, useCallback, MouseEvent, useEffect } from 'react'
import ModeToggleButton from '../../ModeToggleButton/ModeToggleButton'
import AppThemeProvider from '../../provider/ThemeProvider'
import { Todo, FilterButton } from '../../types/types'
import { AddTodo } from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList() {
    const buttons: FilterButton[] = [
        {
            name: 'All',
            value: 'all',
        },
        {
            name: 'Active',
            value: 'active',
        },
        {
            name: 'Completed',
            value: 'completed',
        },
    ]

    //const [data, setData] = useState(todosData)
    const [data, setData] = useState(readTodos)

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(data))
    }, [data])
    const handleAdd = (todo: Todo) => {
        setData((prev) => [...prev, todo])
    }

    const handleDelete = useCallback((todo: Todo) => {
        setData((todos) =>
            todos.filter((item: { id: number }) => item.id !== todo.id)
        )
    }, [])

    const handleUpdate = useCallback((updated: Todo) => {
        setData((todos) =>
            todos.map((t) => (t.id === updated.id ? updated : t))
        )
    }, [])

    const filtered = getFilterdItem(data, filter)

    return (
        <AppThemeProvider>
            <ModeToggleButton />
            <ul>
                {buttons &&
                    buttons.map((type, index) => (
                        <>
                            <button
                                key={index}
                                value={type.value}
                                className={`${
                                    filter === type.value && 'selected'
                                }`}
                                onClick={() => setFilter(type.value)}
                            >
                                {type.name}
                            </button>
                        </>
                    ))}
            </ul>
            <ul>
                {filtered.map((item) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </AppThemeProvider>
    )
}

function getFilterdItem(todos: Todo[], filter: string) {
    if (filter === 'all') {
        return todos
    }
    return todos.filter((item) => item.status === filter)
}

function readTodos(): Todo[] | [] {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
}
