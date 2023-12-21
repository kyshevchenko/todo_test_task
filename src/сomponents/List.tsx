import { TodosType } from '../App'
import Todo from './Todo'

type ListProps = {
  todos: TodosType;
}

export default function List({ todos }: ListProps): JSX.Element {
  return (
    <div>
      {todos ? (
        todos.map((elem) => 
        <Todo key={elem.id} data={elem} />
        )) : 
        (<div>Данных нет</div>)}
    </div>
  )
}