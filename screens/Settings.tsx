import { Link } from 'lucide-react'
import AppContainer from '../components/AppContainer'
import AppRow from '../components/AppRow'
import ColorPicker from '../components/ColorPicker'
import '../style/components/settings.scss'

export default () =>{
    return(
        <AppContainer>
            <AppRow>
                <h1 className='c-settings-header'>Settings</h1>
                <Link to="/" className='c-settings-back'>{'<'}Back to todos</Link>
                <ColorPicker></ColorPicker>
            </AppRow>
        </AppContainer>
    )
}