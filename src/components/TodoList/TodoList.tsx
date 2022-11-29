import React, { useState, useCallback, MouseEvent } from 'react'
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

    const todos: Todo[] = [
        {
            id: 1,
            text: '물마시기',
            status: 'active',
        },
        {
            id: 2,
            text: '로잉머신 1km 성공하기',
            status: 'active',
        },
        {
            id: 3,
            text: '식물에 물주기',
            status: 'active',
        },
        {
            id: 4,
            text: '커피 마시는것 하루 세잔으로 줄이기!',
            status: 'active',
        },
        {
            id: 5,
            text: '야무지게 숨쉬기',
            status: 'active',
        },
    ]

    const [data, setData] = useState(todos)
    const [filter, setFilter] = useState('all')

    const handleAdd = (todo: Todo) => {
        setData((prev) => [...prev, todo])
    }

    const handleDelete = useCallback((todo: Todo) => {
        setData((todos) => todos.filter((item) => item.id !== todo.id))
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
