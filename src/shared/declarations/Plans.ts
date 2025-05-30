export type Plan = {
    name: string
    price: number
    description: Array<string>,
    age: number
}

export type Plans = {
    list: Array<Plan>
}