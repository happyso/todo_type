import React, { useState, ComponentProps } from 'react'
import { Todo } from '../../types/types'

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
    // const [form, setFrom] = useState({
    //     id: '',
    //     desc: '',
    //     isComplete: false,
    // })

    const handleAdd = (todo: Todo) => {
        setData((prev) => [...prev, todo])
    }
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>{item.text}</div>
            ))}
            <AddTodo onAdd={handleAdd} />
        </>
    )
}

export function AddTodo({ onAdd }: { onAdd: any }) {
    const [text, setText] = useState('')
    const handleSubmit: ComponentProps<'form'>['onSubmit'] = (e): void => {
        e.preventDefault()
        const id = String(new Date().getMilliseconds())
        onAdd({
            id: id,
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
