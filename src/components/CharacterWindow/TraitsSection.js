import {useState} from 'react'
import {TraitInfoPopUp} from './TraitInfoPopUp.js'

export const TraitsSection = ()=>{
    const [currentTraitInfo,setTrait] = useState('');
    
    function showTraitInfo(trait){
        setTrait(trait)
    }

    function hideTraitInfo(){
        setTrait('')
    }
    
    return(
        <div className='character-traits'>
            <div className='character-traits-flex'>
                <h1>Backstory</h1>
                <div className='flex-block'>
                    <h2>Childhood:</h2>
                    <p>Физико-математическая школа</p>
                </div>
                <div className='flex-block'>
                    <h2>Adulthood:</h2>
                    <p>ЮФУ</p>
                </div>
            </div>
            <div className="character-traits-flex">
                <h1>Current work</h1>
                <div className='flex-block'>
                    <h2>Occupancy:</h2>
                    <p>-</p>
                </div>
                <div className='flex-block'>
                    <h2>Project:</h2>
                    <p><a href={"https://github.com/KeillsIDP/rimlike-portfolio"}>RimLike Portfolio</a></p>
                </div>
            </div>
            <div className="character-traits-flex">
                <h1>Traits</h1>
                <div>
                    <h2 onMouseEnter={()=>showTraitInfo('kind')} onMouseLeave={()=>hideTraitInfo()}>Kind</h2>
                    {currentTraitInfo=='kind'?<TraitInfoPopUp text="Keills is an exceptionally agreeable and giving person. He never insults others and will sometimes offer kind words to brighten the moods of those around him. Keills also never judges people by their appearance. Keills rarely if ever gets in a social fight."/>:''}
                </div>
                <div>
                    <h2 onMouseEnter={()=>showTraitInfo('hardworker')} onMouseLeave={()=>hideTraitInfo()}>Hard Worker</h2>
                    {currentTraitInfo=='hardworker'?<TraitInfoPopUp text="Keills is a natural hard worker and will finish tasks faster than most."/>:''}
                </div>
                <div>
                    <h2 onMouseEnter={()=>showTraitInfo('greatmemory')} onMouseLeave={()=>hideTraitInfo()}>Great Memory</h2>
                    {currentTraitInfo=='greatmemory'?<TraitInfoPopUp text="Keills has a fantastic memory for detail. He will lose unused skills at half the rate of other people."/>:''}
                </div>
                <div>
                    <h2 onMouseEnter={()=>showTraitInfo('fastlearner')} onMouseLeave={()=>hideTraitInfo()}>Fast Learner</h2>
                    {currentTraitInfo=='fastlearner'?<TraitInfoPopUp text="Keills has a knack for learning. He picks things up much faster than others. Keills is great at researching."/>:''}
                </div>
            </div>
        </div>
    )
}