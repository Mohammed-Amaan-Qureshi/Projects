const TodoHeader = ({dateTime})=>{
    return (
        <>
            <h1 style={{color : "#fff"}}>To-Do App</h1>
            <h2 style={{color : "#fff"}}>{dateTime}</h2>
        </>   
    )
}

export default TodoHeader