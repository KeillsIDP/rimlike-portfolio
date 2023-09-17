import csharp from '../../img/csharp.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import java from '../../img/java.png'
import react from '../../img/react.png'
import unity from '../../img/unity.png'

import {ProjectVisual} from "./ProjectVisual.js"
import "./ProjectsWindow.css"

export const ProjectsWindow = () => {
    return(
        <div className="projects-window">
            <ProjectVisual images={[react,css,html]} title={'RimLike Portfolio'} 
                link={'https://github.com/KeillsIDP/rimlike-portfolio'} 
                status={'In work'} description={"That's what you see! My portfolio in RimWorld style"}/>
            <ProjectVisual images={[react,css,html]} title={'SFEDU English Site'} 
                link={'https://github.com/KeillsIDP/engSfedu'} 
                status={'In work'} description={"Site for studiyng english for my university"}/>
            <ProjectVisual images={[react,css,html]} title={'Some site that i did'} 
                link={'https://github.com/KeillsIDP/muam'} 
                status={'Finished'} description={"Kinda of homework for one of my courses"}/>
        </div>
    )
}