
export const ProjectFilters = ({state,setFunction}) => {

    function onChange(tag){
        if(tag==state)
            setFunction("")
        else
            setFunction(tag)
    }

    return(
        <div className="filters">
            <h1>Filters</h1>
            <div className="filter">
                <h1>Java</h1>
                <input type={"checkbox"} onChange={()=>onChange("java")}/>
            </div>
            <div className="filter">
                <h1>C#</h1>
                <input type={"checkbox"} onChange={()=>onChange("csharp")}/>
            </div>
            <div className="filter">
                <h1>React</h1>
                <input type={"checkbox"} onChange={()=>onChange("react")}/>
            </div>
            <div className="filter">
                <h1>Unity</h1>
                <input type={"checkbox"} onChange={()=>onChange("unity")}/>
            </div>
            <div className="filter">
                <h1>HTML</h1>
                <input type={"checkbox"} onChange={()=>onChange("html")}/>
            </div>
            <div className="filter">
                <h1>CSS</h1>
                <input type={"checkbox"} onChange={()=>onChange("css")}/>
            </div>
        </div>
    )
}