import { useEffect, useState } from "react";
import css from "./TodoContainer.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoClearAllBtn from "./TodoClearAllBtn";
import TodoHeader from "./TodoHeader";
// import { getLocalStorageData, setLocalStorageData } from "./StoreTodo";



const todoStorageKey = "reactTodo"




const TodoContainer = () => {
  const [task, setTask] = useState(() => {
    const rawData = localStorage.getItem(todoStorageKey)
        if(!rawData) return []
        else return JSON.parse(rawData)
  });

  //Todo local storage
  localStorage.setItem(todoStorageKey,JSON.stringify(task))

  const handelOnSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // If content is not there
    if (!content) return;

    // if content is already present
    if (
      task.find(() => {
        task.content === content;
      })
    )
      return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteBtn = (val) => {
    console.log(val);
    const updatedTask = task.filter(
      (currentTask) => currentTask.content !== val
    );
    setTask(updatedTask);
  };

  const handleClearAll = () => {
    setTask([]);
    console.log("Cleared All");
    console.log(task);
  };

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckedTodo = (data) => {
    const updatedTask = task.map((currentTask) => {
      if (currentTask.content === data) {
        return { ...currentTask, checked: !currentTask.checked };
      } else {
        return currentTask;
      }
      console.log("Checked");
      
    });

    setTask(updatedTask);
  };

  return (
    <>
      <div className={css.todoContainer}>
        <TodoHeader dateTime={dateTime} />

        <TodoForm onAddTodo={handelOnSubmit} />

        <section >
          <ul>
            {
            //   .filter(val => val !== null) // Add this line to filter out null values
              task.map((val) => {
              return (
                <TodoList
                  key={val.id}
                  data={val.content}
                  checked={val.checked}
                  onHandleCheckedTodo={() => handleCheckedTodo(val.content)}
                  onHandleDeleteTodo={() => handleDeleteBtn(val.content)}
                />
              );
            })}
          </ul>
        </section>

        <TodoClearAllBtn deleteAll={handleClearAll} />
      </div>
    </>
  );
};
export default TodoContainer;
