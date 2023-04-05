import styles from "./index.module.scss";
import { Context } from "../../store";
import { useContext, useState } from "react";
import { initialState } from "../../store/state";

const AddTaskModal = () => {
  const { state, dispatch } = useContext(Context, initialState);

  const closeModal = () => dispatch({ type: "ONOFF_MODAL", payload: false });

  const onHandleCloseModal = () => closeModal();

  const onChangeValue = (e) => {
    switch (e.target.name) {
      case "person":
        return dispatch({ type: "ADD_PERSON_TASK", payload: e.target.value });
      case "todo":
        return dispatch({ type: "ADD_TODO_TASK", payload: e.target.value });
      case "link-img":
        return dispatch({ type: "ADD_LINK_TASK", payload: e.target.value }); //Da sistemare id
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: state.addTask });
    closeModal();
  };

  return (
    <div className={styles.AddTaskModal}>
      <h1>Aggiungi Task!</h1>
      <button onClick={onHandleCloseModal}>X</button>
      <form className={styles.content} onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="person"
          id="person"
          placeholder="Nome"
          onChange={onChangeValue}
          required
        />
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="TODO"
          onChange={onChangeValue}
          required
        />
        <input
          type="text"
          name="link-img"
          id="link-img"
          placeholder="Link"
          onChange={onChangeValue}
          required
        />
        <input type="submit" value="Crea TODO!" />
      </form>
    </div>
  );
};

export default AddTaskModal;
