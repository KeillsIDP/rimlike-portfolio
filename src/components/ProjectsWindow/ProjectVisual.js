export const ProjectVisual = ({images,title,status,description,link,tags,searchTag}) => {
    const imagesVisual = Array(images.length)
    for(let i = 0;i<imagesVisual.length;i++)
        imagesVisual[i] = <img src={images[i]}/>
    
    var isVisible = false;
    if(searchTag.length>0)
    {
        for(let i = 0;i<tags.length;i++)
            if(tags[i]==searchTag)
                isVisible = true;
    }
    else
        isVisible = true;

    return(
        <div className={isVisible?"project-visual":"inactive"}>
            <div className="project-up-section">
                <div className="project-text">
                    <h1><a href={link}>{title}</a></h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="project-down-section">
                <div>
                {imagesVisual}
                </div>
                <div className="project-status">
                    {status}
                </div>
            </div>
        </div>
    )
}