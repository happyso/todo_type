import React, { useState, ComponentProps, ReactElement } from 'react'
import { Todo } from '../../types/types'

type onAdd = (todo: Todo) => void

export function AddTodo({ onAdd }: { onAdd: onAdd }) {
    const [text, setText] = useState('')
    const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e): void => {
        e.preventDefault()
        if (text.trim().length === 0) return
        const id = String(new Date().getMilliseconds())
        onAdd({
            id: Number(id),
            text: text,
            isComplete: false,
        })
        setText('')
    }
    const handleChange: ComponentProps<'input'>['onChange'] = (e): void => {
        const { value } = e.target
        setText(value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="desc">할일적기:</label>
                <input
                    type="text"
                    placeholder="Add Todo"
                    value={text}
                    onChange={handleChange}
                />

                <button>Add</button>
            </form>
        </div>
    )
}
