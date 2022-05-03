import {Check} from "lucide-react"
import { ChangeEvent } from "react"
import Todo from "../interfaces/Todo"
import "../style/components/ToDoItem.scss"
const ToDoItems = ({todo, toggleTodo,}:{todo:Todo, toggleTodo:Function})=>{
return(
    <div className={`c-todo-item  ${todo.completed ? 'u-muted' : 'u-muted-100'}`}>
        <input className="c-todo-item-input" 
                type="checkbox" 
                name="" id={todo.id} 
                checked={todo.completed} 
                onChange={(e:ChangeEvent<HTMLInputElement>)=> {toggleTodo(e)}}/>
        <label className="c-todo-item-label" htmlFor={todo.id}>
            <Check className="c-todo-item-symbol"/>
        </label>
        <div className="c-todo-item-content">
            <p className="c-todo-item-text">{todo.title}</p>
            <p className="c-todo-item-category">{todo.category}</p>
        </div>
    </div>
)
}
export default ToDoItems