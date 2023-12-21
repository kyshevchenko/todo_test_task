import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react'
import type { TodosType } from '../../src/App';

type Input = {
  id?: string;
  title: string
  status: boolean
}

type FormProps = {
  setTodos: Dispatch<SetStateAction<TodosType>>
}

export default function Form({ setTodos }: FormProps): JSX.Element {
    const [input, setInput] = useState<Input>({ title: '', status: false})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addHandler = () => {
      const storedTodos = localStorage.getItem('todos');
      const tasks = storedTodos ? JSON.parse(storedTodos) : [];
      const newTodo = {
        id: Date.now().toString(),
        title: input.title,
        status: false,
      };
      tasks.push(newTodo);
    
      localStorage.setItem('todos', JSON.stringify(tasks));
      setTodos((prev) => [...prev, newTodo]);
      setInput({ title: '', status: false });
    }

  return (
    <form>
      <input onChange={handleInputChange} type='text' name='title' placeholder='title' value={input.title}/>
      <button onClick={addHandler} type="button">Добавить</button>
    </form>
  )
}