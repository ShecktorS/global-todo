import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import AddTaskModal from "./components/addTaskModal";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button
          className={styles.addTodo}
          onClick={() => {
            dispatch({ type: "ONOFF_MODAL", payload: true });
            console.log(state.isModalVisible);
          }}
        >
          {"+"}
        </button>
        {state.isModalVisible && <AddTaskModal />}
      </Context.Provider>
    </div>
  );
}

export default App;
