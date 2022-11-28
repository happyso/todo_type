import React from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import TodoList from './components/TodoList/TodoList'

function App() {
    const queryClient = new QueryClient({})
    return (
        <QueryClientProvider client={queryClient}>
            <TodoList />
        </QueryClientProvider>
    )
}

export default App
