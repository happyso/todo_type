export interface Id {
    id: number
}

export interface Todo extends Id {
    text: string
    status: string
}

export interface FilterButton {
    name: string
    value: string
}
