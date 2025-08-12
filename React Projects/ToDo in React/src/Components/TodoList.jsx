import css from "./TodoContainer.module.css"
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({data,checked,onHandleCheckedTodo,onHandleDeleteTodo})=>{
    return (
         <li style={{backgroundColor : "#fff" , margin : "1rem 2rem" , padding : "1rem 1rem" , minWidth : "4rem" , minHeight : "2rem" , borderRadius : "2rem" , listStyle : "none" ,}}>
            <h2 style={{ display : "flex" , justifyContent : "space-between" , alignItems : "center" , flex : "wrap" , margin : "0 1rem"}}>
                <div className= {checked ? css.checkedList : css.notCheckedList}>{data}</div>
                                     <div>
                                      <button className={css.checkBtn} style={{backgroundColor:"#54ef54" , borderRadius : "50%" , border : "none" , height : "2rem" , width : "2rem" , margin : "0 1rem"}} ><FaCheck style={{height : "1.5rem" , width : "1.5rem" , color : "#fff"}} onClick={()=>onHandleCheckedTodo(data)}/></button>
                                      <button className={css.deleteBtn} style={{backgroundColor:"red" , borderRadius : "50%" , border : "none" , height : "2rem" , width : "2rem" , margin : "0 1rem"}} ><MdDeleteForever style={{height : "1.5rem" , width : "1.5rem" , color : "#fff"}}  onClick={()=>onHandleDeleteTodo(data)}/></button>
                                      </div>
                                      </h2></li>
    )   
}

export default TodoList