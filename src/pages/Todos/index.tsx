import React from "react";

import PageWrapper from "../../common/PageWrapper";
import Button from "../../common/Button";
import Loader from "../../common/Loader";
import UserTodosCardList from "../../components/UserTodosCardList";
import TodosChart from "../../components/TodosChart";
import useUsersTodosList from "../../hooks/useUsersTodosList";

const TodosPage = () => {
  const {
    todos,
    isError,
    isLoading,
    fetchTodos,
  } = useUsersTodosList();

  return (
    <PageWrapper title="ToDo">
      <Button
        disabled={isLoading}
        onClick={() => fetchTodos()}
      >
        Загрузить данные
      </Button>
      {isLoading && <Loader />}
      {isError && <span>Ошибка загрузки</span>}
      {/* Элегантно решаем проблему отсутствия redux */}
      <TodosChart list={todos} />
      <UserTodosCardList list={todos} />
    </PageWrapper>
  );
};

export default TodosPage;
