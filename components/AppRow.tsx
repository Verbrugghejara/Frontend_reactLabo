import '../style/objects/row.scss' // Can be accessed alsewhere



const AppRow = ({children}:{children:JSX.Element | JSX.Element[]})=> 
    <div className='o-row'>
        {children}
    </div>

export default AppRow