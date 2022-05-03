import '../style/components/ToDoInput.scss'

import { Plus } from 'lucide-react'
import Todo from '../interfaces/Todo'
import React, { ChangeEvent, useState } from 'react'
import { uid } from 'uid'

const ToDoInput = ({ setNewTodo }: { setNewTodo: Function }) => {
  const [todo, setTodo] = useState<Todo>({
    id: uid(8),
    title: '',
    category: 'pickOption',
    completed: false,
  })
  const clickHandler = () => {
    console.log(todo)
    if (todo.title && todo.id && todo.category) {
      setNewTodo(todo)
      setTodo(() => ({
        id: uid(8),
        title: '',
        category: 'pickOption',
        completed: false,
      }))
    } else {
      //TODO show error message
    }
  }
  // TODO: maak een nieuwe todo aan
  // Haal values ui input-veldens
  return (
    <div className="c-todo-input">
      <div className="c-todo-input__container">
        <button className="c-todo-input__button">
          <Plus onClick={clickHandler} className="c-todo-input__symbol" />
        </button>
        <input
          className="c-todo-input__text"
          placeholder="What needs to be done?"
          type="text"
          name=""
          id=""
          onInput={(e: any) =>
            setTodo((t: Todo) => {
              t.title = e.target.value
              return { ...t }
            })
          }
          value={todo.title}
        />
      </div>
      <select
        className="c-todo-input__categories"
        name="categories"
        id="categories"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setTodo((t: Todo) => {
            t.category = e.target.options[e.target.selectedIndex].value
            return { ...t }
          })
        }
      >
        <option disabled value="pickOption">
          {' '}
          pickOption
        </option>
        <option value="School"> School</option>
        <option value="Work">Work</option>
        <option value="Hobby">Hobby</option>
      </select>
    </div>
  )
}
export default ToDoInput
