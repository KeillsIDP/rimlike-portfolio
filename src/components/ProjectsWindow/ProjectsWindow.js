import csharp from '../../img/csharp.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import java from '../../img/java.png'
import react from '../../img/react.png'
import unity from '../../img/unity.png'

import {useState} from "react"
import {ProjectVisual} from "./ProjectVisual.js"
import {ProjectFilters} from "./ProjectFilters.js"
import "./ProjectsWindow.css"

export const ProjectsWindow = () => {
    const [searchTag,setSearchTag] = useState('')

    function setTag(tag) {
        setSearchTag(tag)
    }

    return(
        <div className="projects-window">
            <div className="projects">
                <ProjectVisual images={[react,css,html]} title={'RimLike Portfolio'} 
                    tags = {["react","html","css"]}
                    searchTag = {searchTag}
                    link={'https://github.com/KeillsIDP/rimlike-portfolio'} 
                    status={'Finished'} description={"That's what you see! My portfolio in RimWorld style"}/>
                <ProjectVisual images={[react,css,html]} title={'SFEDU English Site'} 
                    tags = {["react","html","css"]}
                    searchTag = {searchTag}
                    link={'https://github.com/KeillsIDP/engSfedu'} 
                    status={'In work'} description={"Site for studiyng english for my university"}/>
                <ProjectVisual images={[react,css,html]} title={'Some site that i did'} 
                    tags = {["react","html","css"]}
                    searchTag = {searchTag}
                    link={'https://github.com/KeillsIDP/muam'} 
                    status={'Finished'} description={"Kinda of homework for one of my courses"}/>
                <ProjectVisual images={[react,java,html]} title={'RESTapi Trademarket'} 
                    tags = {["react","html","java"]}
                    searchTag = {searchTag}
                    link={'https://github.com/KeillsIDP/restapi-trademarket-front'} 
                    status={'In work'} description={"Trademarket prototype for selling various items"}/>
            </div>
            <ProjectFilters setFunction={setTag} state={searchTag}/>
        </div>
    )
}