import instance from "./index";
import { TodoItem } from "../../types/todo";

const TodoApi = {
  getAllTodos() {
    return instance.request<TodoItem[]>({
      url: "/todos",
    });
  },
};

export default TodoApi;
