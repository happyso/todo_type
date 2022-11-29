import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../axiosInstance'
import { Todo } from '../types/types'

async function getTodos(): Promise<Todo[]> {
    const { data } = await axiosInstance.get('/todoData.json')
    return data
}

export function useTodo(): { todoData: Todo[]; isLoading: boolean } {
    const fallback: Todo[] | undefined = []
    const { data: todoData = fallback, isLoading } = useQuery(
        ['todo_list'],
        getTodos
    )
    return { todoData, isLoading }
}
