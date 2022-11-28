import React from 'react'
import { useTodo } from './hooks/useTodo'

export default function List() {
    const todos = useTodo()
    return (
        <>
            {todos.map((item) => (
                <div key={item.id}>{item.desc}</div>
            ))}
        </>
    )
}
