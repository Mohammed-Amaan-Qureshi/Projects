import css from "./TodoContainer.module.css"
import { useState } from "react"

const TodoForm = ({onAddTodo})=>{
    
    const [inputValue,setInputValue] = useState({})
        
    const handelOnChange = (val)=>{
        setInputValue({id : val, content : val, checked : false})
    }

    const handelOnSubmit = (evt)=>{
        evt.preventDefault()
        onAddTodo(inputValue)
        setInputValue({id : "", content : "", checked : false})
    }

    return (
         <form onSubmit={handelOnSubmit}>
                            <input type="text" className= {css.todoInput} autoComplete="off" placeholder="Enetr Your To-Do" value={inputValue.content} onChange={(e)=>{handelOnChange(e.target.value)}}/>
                            <button type="submit" className={css.todoBtn}>Add Task</button>
                        </form>
    )
}

export default TodoForm