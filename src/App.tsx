import React from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import TodoList from './components/TodoList/TodoList'
import { RecoilRoot } from 'recoil'

function App() {
    const queryClient = new QueryClient({})
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <TodoList />
            </RecoilRoot>
        </QueryClientProvider>
    )
}

export default App
