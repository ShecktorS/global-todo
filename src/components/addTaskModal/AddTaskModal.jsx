import styles from "./index.module.scss";
import { Context } from "../../store";
import { useContext } from "react";
import { initialState } from "../../store/state";

const AddTaskModal = () => {
  const { state, dispatch } = useContext(Context, initialState);

  return (
    <div className={styles.AddTaskModal}>
      <h1>Aggiungi Task!</h1>
      <button
        onClick={() => {
          dispatch({ type: "ONOFF_MODAL", payload: false });
          console.log(state);
        }}
      >
        X
      </button>
    </div>
  );
};

export default AddTaskModal;
