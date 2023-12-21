import { useState, useEffect } from 'react';
import Form from './сomponents/Form';
import List from './сomponents/List';

export type TodoType = {
  id: string;
  title: string;
  status: boolean;
};
export type TodosType = TodoType[];

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodosType>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];

    setTodos(parsedTodos);
  }, []);

  return (
    <div>
      <Form setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
}

export default App;