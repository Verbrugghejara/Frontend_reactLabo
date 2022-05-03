import { ToggleLeft } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";
import AppRow from "./components/AppRow";
import ToDoAppHeader from "./components/ToDoAppHeader";
import ToDoInput from "./components/ToDoInput";
import ToDoItems from "./components/ToDoItems";
import Todo from "./interfaces/Todo"


function App() {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.todos ? JSON.parse(localStorage.todos):[],
  )
  // TODO :  tel het aantal todos en geef dat mee als prop aan TodoAppHeader
  // TODO: na 300ms  mag een todo verwijderd worden (bijafvinken), fade deze eerst uit
  
  const appendTodo = (t:Todo)=>{
    setTodos((oldTodos: Todo[]) => {
      console.log(t)
      return [...oldTodos,t]
      // maak nieuwe array met onze oude todos en de nieuwe todos
    })
  }
  const removeTodo = (t:Todo) =>{
      setTodos((currentTodos:Todo[])=>
        currentTodos.filter((loopTodo:Todo)=>loopTodo.id !==t.id),
        )
  }
  const toggle = (t:Todo,e:ChangeEvent<HTMLInputElement>)=>{
    setTodos((oldTodos: Todo[]) => {
      const tempTodos:Todo[]= oldTodos.map((todo:Todo)=>{
        if (t.id === todo.id) 
          todo.completed = e.target.checked
      return todo
      })
      return [...tempTodos]
    })
    //verwijder todo na 300ms
    const timeOut = setTimeout(()=>{
      if (t.completed){
        removeTodo(t)
      }
    },1000)
  }
  useEffect(()=> {
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  return (
    
      <main>
        <AppContainer>
          <AppRow>
            <ToDoAppHeader amount={todos.length}/>
            <ToDoInput setNewTodo={(t:Todo)=> appendTodo(t)}/>
            {/*content*/}
            {
              // TODO loop todos en maak item aan voor elke todo
              // Geef prop van type todo aan elk Todo component
            }
            <>
            {todos.map((t:Todo)=>(

            <ToDoItems todo={t} toggleTodo={(e:ChangeEvent<HTMLInputElement>)=> toggle(t,e)} key={t.id}/>
            ))}
            </>

          </AppRow>
        </AppContainer>
      </main>
    
  );
}

export default App;
