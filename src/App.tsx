import React from 'react'
import './App.css'
import Home from './components/Home'
import List from './components/List'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

function App() {
    const queryClient = new QueryClient({})
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
            <List />
        </QueryClientProvider>
    )
}

export default App
