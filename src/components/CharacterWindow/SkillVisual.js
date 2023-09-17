import passion from '../../img/passion.png'

export const SkillVisual = ({image,level,passionLevel}) => {
    const passionVisualization = Array(passionLevel);
    for(let i = 0;i<passionLevel;i++)
        passionVisualization[i] = <img src={passion}/>

    const barStyle = {
        width: `${level*5}%`,
        height: '3.9vh',
        marginTop: '-3vh',
        backgroundColor: '#dfd6d6'
    }
    
    return(
        <div className="character-skill">
            <img src={image}/>
            <div className="skill-passion">
                {passionVisualization}
            </div>
            <div className="skill-progress-bar">
                <p>{level}/20</p>
                <div className="skill-progress" style={barStyle}></div>
            </div>
        </div>
    )
}