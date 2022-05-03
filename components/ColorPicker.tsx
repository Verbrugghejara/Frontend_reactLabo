// TODO: styling
import { ChangeEvent, ChangeEventHandler } from 'react'
import '../style/components/color-picker.scss'
//TODO :aantal kleuren

//TODO: css var aanpassen

// TODO accessible maken


export default () => {
    const colors =[
        'aqua',
        'rebeccapurple',
        'hotpink',
        'darkGrey'
    ]
    const handleColorChange= (e:
        ChangeEvent<HTMLInputElement>)=>{
            // een van de enige usecas om dom element te doen !!!
            console.log(e.target.value)
            document.documentElement.style.setProperty(
                '--global-theme-color',
                e.target.value,
            )
        }
    return (
        <div className='c-color-picker'>
            {colors.map((color:string)=>(
                <div className='c-color-picker__color' key={color}>
                    <input className='c-color-picker-input' key={color} type="radio" name='theme-color' id={color} value={color}/>
                    <label className='c-color-picker-label' key={color} htmlFor={color} style={{backgroundColor:color}}>{color}</label>
                </div>
            ))}
        </div>
    )
}