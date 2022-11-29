import React, { useState, useCallback } from 'react'
import { Todo } from '../../types/types'
import { AddTodo } from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList() {
    const todos: Todo[] = [
        {
            id: 1,
            text: '물마시기',
            isComplete: false,
        },
        {
            id: 2,
            text: '로잉머신 1km 성공하기',
            isComplete: false,
        },
        {
            id: 3,
            text: '식물에 물주기',
            isComplete: false,
        },
        {
            id: 4,
            text: '커피 마시는것 하루 세잔으로 줄이기!',
            isComplete: false,
        },
        {
            id: 5,
            text: '야무지게 숨쉬기',
            isComplete: false,
        },
    ]

    const [data, setData] = useState(todos)

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
    return (
        <>
            <ul>
                {data.map((item) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </>
    )
}
