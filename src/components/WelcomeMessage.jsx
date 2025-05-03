import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { newTodoItems } = useContext(TodoItemsContext);
  return (
    newTodoItems.length === 0 && (
      <p className={styles.welcome}>Enjoy Your Day</p>
    )
  );
};

export default WelcomeMessage;
