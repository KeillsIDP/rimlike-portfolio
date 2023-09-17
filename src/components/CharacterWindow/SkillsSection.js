import csharp from '../../img/csharp.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import java from '../../img/java.png'
import react from '../../img/react.png'
import unity from '../../img/unity.png'
import {SkillVisual} from './SkillVisual.js'

export const SkillsSection = () => {
    return(
        <div className='skills-section'>
            <SkillVisual image={java} level={8} passionLevel={3}/>
            <SkillVisual image={csharp} level={10} passionLevel={1}/>
            <SkillVisual image={unity} level={10} passionLevel={2}/>
            <SkillVisual image={react} level={8} passionLevel={1}/>
            <SkillVisual image={css} level={10} passionLevel={0}/>
            <SkillVisual image={html} level={15} passionLevel={0}/>
        </div>
    )
}