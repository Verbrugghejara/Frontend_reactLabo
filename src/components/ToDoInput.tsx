import '../style/components/ToDoInput.scss'

import {Plus} from 'lucide-react'

const ToDoInput = ()=>{
return(
    <div className='c-todo-input'>
        <div className='c-todo-input__container'>
            <button className='c-todo-input__button'>
                <Plus className='c-todo-input__symbol'/>

            </button>
          <input className='c-todo-input__text' placeholder='What needs to be done?' type="text" name="" id=""/>
        </div> 
        <select className='c-todo-input__categories' name='categories' id="categories">
            <option value="School"> School</option>    
            <option value="Work">Work</option>  
            <option value="Hobby">Hobby</option>  
        </select> 
    </div>
)
}
export default ToDoInput