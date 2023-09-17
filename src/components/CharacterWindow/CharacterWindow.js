import {TopSection} from './TopSection.js'
import {TraitsSection} from './TraitsSection.js'
import {SkillsSection} from './SkillsSection.js'
import './CharacterWindow.css'

export const CharacterWindow = () => {
    return(
        <div className='character-window'>
            <div>
                <TopSection/>
                <TraitsSection/>
            </div>
            <SkillsSection/>
        </div>
    )
}