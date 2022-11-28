import React, { useState } from 'react'
import { useTodo } from './hooks/useTodo'
import { Todo } from '../types/types'

export default function List() {
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

    //const todos = useTodo()
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>{item.text}</div>
            ))}

            <input type="text" />
            <button>등록하기</button>
        </>
    )
}
