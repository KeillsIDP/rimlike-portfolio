import {TopSection} from './TopSection.js'
import {TraitsSection} from './TraitsSection.js'
import './CharacterWindow.css'

export const CharacterWindow = () => {
    return(
        <div className='character-window'>
            <TopSection/>
            <TraitsSection/>
        </div>
    )
}