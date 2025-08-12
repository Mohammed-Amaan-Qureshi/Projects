import css from "./TodoContainer.module.css"

const TodoClearAllBtn = ({deleteAll})=>{
    return (
        <section className={css.clear}>
                <button className={css.clearbtn} onClick={deleteAll} style={{fontSize : "1.5rem" , fontWeight : "900"}}>
                    Clear All
                </button>
            </section>
    )
}

export default TodoClearAllBtn