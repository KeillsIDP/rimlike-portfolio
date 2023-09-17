export const ProjectVisual = ({images,title,status,description,link}) => {
    const imagesVisual = Array(images.length)
    for(let i = 0;i<imagesVisual.length;i++)
        imagesVisual[i] = <img src={images[i]}/>

    return(
        <div className="project-visual">
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