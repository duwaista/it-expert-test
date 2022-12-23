import React, { useState } from "react";

import PageWrapper from "../../common/PageWrapper";
import Button from "../../common/Button";
import Loader from "../../common/Loader";
import groupTodosByUsers from "../../utils/groupTodosByUsers";
import sortUsersTodoByCompleteOrId from "../../utils/sortUsersTodoByCompleteOrId";
import UserTodosCardList from "../../components/UserTodosCardList";
import TodosChart from "../../components/TodosChart";
import TodoApi from "../../services/api/todo";
import { UserTodoItem } from "../../types/todo";

const TodosPage = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<UserTodoItem[]>([]);

  // Лучше использовать react-query
  const getAllTodos = async () => {
    setLoading(true);
    try {
      const { data } = await TodoApi.getAllTodos();
      // Хуков не существует...
      const groupedTodos = groupTodosByUsers(data);
      const sortedTodos = sortUsersTodoByCompleteOrId(groupedTodos);
      setTodos(sortedTodos);
    } catch (e) {
      // Сложная логика обработки ошибок
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper title="ToDo">
      <Button
        disabled={loading}
        onClick={() => getAllTodos()}
      >
        Загрузить данные
      </Button>
      {loading && <Loader />}
      {/* Элегантно решаем проблему отсутствия redux */}
      <TodosChart list={todos} />
      <UserTodosCardList list={todos} />
    </PageWrapper>
  );
};

export default TodosPage;
