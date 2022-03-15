import '../style/components/ToDoHeader.scss'


const ToDoAppHeader = ()=>{
return(
    <header className="c-todo-app-header">
        <h1 className="c-todo-app-header__title">Hello {'Jara'}</h1>
        <h2 className="c-todo-app-header__subtitle">There are {3} todos.</h2>
    </header>
)
}
export default ToDoAppHeader