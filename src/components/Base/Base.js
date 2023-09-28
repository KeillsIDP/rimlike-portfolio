import './Base.css'
import {useState} from 'react'
import {CharacterWindow} from '../CharacterWindow/CharacterWindow'
import {ProjectsWindow} from '../ProjectsWindow/ProjectsWindow'
import {ContactsWindow} from '../ContactsWindow/ContactsWindow'

export const Base = ()=>{
    const [pageState,setPageState] = useState("global")

    function pageChange (state) {
        setPageState(state);
    }

    return(
        <div className="base-block">
            <div className="base-buttons">
                <div className="base-button" onClick={()=>pageChange("global")}>
                    Общее
                    <div className={pageState == "global"?"base-button-noborder":"inactive"}/>
                </div>
                <div className="base-button" onClick={()=>pageChange("projects")}>
                    Проекты
                    <div className={pageState == "projects"?"base-button-noborder":"inactive"}/>
                </div>
                <div className="base-button" onClick={()=>pageChange("contacts")}>
                    Контакты
                    <div className={pageState == "contacts"?"base-button-noborder":"inactive"}/>
                </div>
            </div>
            <div className={pageState == "global"?"":"inactive"}>
                <CharacterWindow/>
            </div>
            <div className={pageState == "projects"?"":"inactive"}>
                <ProjectsWindow/>
            </div>
            <div className={pageState == "contacts"?"":"inactive"}>
                <ContactsWindow/>
            </div>
        </div>
    )
}