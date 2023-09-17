import character from '../../img/Keills.png'

export const TopSection = ()=>{
    return(
        <div>
            <div className='character-info'>
                <div>
                    <div className='character-name'>
                        <h2>Repin</h2>
                        <h2>"Keills"</h2>
                        <h2>Roman</h2>
                    </div>
                    <h2 className='character-citizenship'> Мужчина программист из РФ, возраст 20(20)</h2>
                </div>
                <img alt="character" src={character}/>
            </div>  
        </div>
    )
}