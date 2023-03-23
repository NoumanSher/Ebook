import axios from "axios"

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

// export const getAll = async () => {
//     debugger
//     const response = await todosApi.get("/todos")
//     return response.data
// }

export const create = async (todo:any) => {
    debugger
    debugger
    const response = await todosApi.post("/todos", todo)
    return response
}

// export const update = async (todo:any) => {
//     return await todosApi.patch(`/todos/${todo.id}`, todo)
// }

// export const remove = async ({id }:any) => {
//     return await todosApi.delete(`/todos/${id}`, id)
// }

export default todosApi 