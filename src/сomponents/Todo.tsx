import { useState } from 'react'
import { TodoType } from '../App'

type TodoProps = {
    key: string;
    data: TodoType
}

export default function Todo({ data }: TodoProps) {
    const [isChecked, setIsChecked] = useState<boolean>(data.status);
    
    const toggleCheckbox = () => {
        const newStatus = !isChecked;
        setIsChecked(newStatus)

        const storedTodos = localStorage.getItem('todos');
        const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
      
        const newTodos = parsedTodos.map((elem: TodoType) => {
          if (data.id === elem.id) {
            return { ...elem, status: newStatus };
          } else {
            return elem;
          }
        })

        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

  return (
    <div>
        <h3 style={{ textDecoration: isChecked ? 'line-through' : 'none'}}>{data.title}</h3>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox}/>
    </div>
  )
}
