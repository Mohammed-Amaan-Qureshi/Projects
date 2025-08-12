const todoStorageKey = "reactTodo"

export const getLocalStorageData =(()=>{
const rawData = localStorage.getItem(todoStorageKey)
        if(!rawData) return []
        else return JSON.parse(rawData)
})

export const setLocalStorageData = ((task)=>{
    return localStorage.setItem(todoStorageKey,JSON.stringify(task))
})