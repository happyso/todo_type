export interface Id {
    id: number
}

export interface Todo extends Id {
    desc: string
    isComplete: boolean
}
