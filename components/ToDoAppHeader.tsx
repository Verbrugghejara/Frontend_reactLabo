import '../style/components/ToDoHeader.scss'


const ToDoAppHeader = ({amount}:{amount:number})=>{
return(
    <header className="c-todo-app-header">
        <h1 className="c-todo-app-header__title">Hello {'Jara'}</h1>
        <h2 className="c-todo-app-header__subtitle">{amount === 0 ?`Nothing to do.`:`There are {amount} todos.`}</h2>
    </header>
)
}
export default ToDoAppHeader