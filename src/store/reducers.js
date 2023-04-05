export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    case "ONOFF_MODAL":
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case "ADD_PERSON_TASK":
      return {
        ...state,
        addTask: {
          ...state.addTask,
          person: action.payload,
        },
      };
    case "ADD_TODO_TASK":
      return {
        ...state,
        addTask: {
          ...state.addTask,
          todo: action.payload,
        },
      };
    case "ADD_LINK_TASK":
      return {
        ...state,
        addTask: {
          ...state.addTask,
          link: action.payload,
        },
      };
    case "ADD_ID_TASK":
      return {
        ...state,
        addTask: {
          ...state.addTask,
          id: state.tasksListData.length++, //Da sistemare
        },
      };
    case "ADD_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
  }
};
