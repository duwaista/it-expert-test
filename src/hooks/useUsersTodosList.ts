import { useCallback, useMemo, useState } from "react";

import TodoApi from "../services/api/todo";
import groupTodosByUsers from "../utils/groupTodosByUsers";
import sortGroupedTodoByCompleteOrId from "../utils/sortGroupedTodoByCompleteOrId";
import { TodoItem, UserTodoItem } from "../types/todo";

const useUsersTodosList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [rawTodos, setRawTodos] = useState<TodoItem[]>([]);

  const getAllTodos = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await TodoApi.getAllTodos();
      setRawTodos(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const todos: UserTodoItem[] = useMemo(() => {
    const groupedTodos = groupTodosByUsers(rawTodos);
    const sortedTodos = sortGroupedTodoByCompleteOrId(groupedTodos);

    return sortedTodos;
  }, [rawTodos]);

  const fetchTodos = useCallback(() => {
    getAllTodos();
  }, [getAllTodos]);

  return {
    isLoading,
    isError,
    fetchTodos,
    todos,
  };
};

export default useUsersTodosList;
