

const MediaRow = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
             
              {loopComp (
                 (<div className="media-row__thumbnail">
                 <img src="https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l400.jpg"/>
                 <div className="media-row__top-layer">
                     <i className="fas fa-play"/>
                 </div>
               </div>), 10
              )}
            </div>
        </div>
    )
}

export default MediaRow; 