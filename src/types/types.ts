export interface Id {
    id: number
}

export interface Todo extends Id {
    text: string
    isComplete: boolean
}
