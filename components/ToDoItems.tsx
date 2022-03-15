import {Check} from "lucide-react"
import "../style/components/ToDoItem.scss"
const ToDoItems = ()=>{
return(
    <div className="c-todo-item">
        <input className="c-todo-item-input" type="checkbox" name="" id=""/>
        <label className="c-todo-item-label">
            <Check className="c-todo-item-symbol"/>
        </label>
        <div className="c-todo-item-content">
            <p className="c-todo-item-text">Planten water geven.</p>
            <p className="c-todo-item-category">Work</p>
        </div>
    </div>
)
}
export default ToDoItems