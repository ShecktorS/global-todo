import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
import { GET } from "../../utils/http";
import Task from "../task/Task";
import styles from "./index.module.scss";
import { todos } from "../../mocks/todoList";

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  //-----------------------------------------------
  //Lascio lo useEffect in modo tale da popolare la lista al momento del montaggio del componente

  useEffect(() => {
    dispatch({ type: "SET_TASKS_LIST", payload: todos });
  }, []);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
