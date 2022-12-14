import React from 'react'
import { Todo } from '../../types/types'

type onDelete = (todo: Todo) => void
type onUpdate = (todo: Todo) => void
export default function TodoItem({
    todo,
    onUpdate,
    onDelete,
}: {
    todo: Todo
    onUpdate: onUpdate
    onDelete: onDelete
}) {
    const { text, status } = todo
    const handleDelete = () => {
        onDelete(todo)
    }
    const handleChange = (e: { target: HTMLInputElement }) => {
        const status = e.target.checked ? 'completed' : 'active'
        onUpdate({ ...todo, status: status })
    }
    return (
        <li>
            <input
                type="checkbox"
                id={todo.text}
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor={todo.text}>{text}</label>
            <button onClick={handleDelete}>delete</button>
        </li>
    )
}
