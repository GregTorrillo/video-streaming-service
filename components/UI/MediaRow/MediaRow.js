import { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffleArray } from '../../utilities';

const MediaRow = (props) => {
    const [loadingData, setLoadingData] = useState(true);
    const [movies, setMoviesData] = useState([]);
   
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=71bbad38cd74cecf8e7ec1d5e478a67a&language=en-US`)
            .then(function (response) {
                setMoviesData(shuffleArray(response.data.results))
                setLoadingData(false);
                // handle success
                console.log('Success Response For ' + props.title)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log('Error Response For ' + props.title)
                console.log(error);
            })
    }, [])

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 1; index <= digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    const showThumbnails = (type) => {
        return loadingData ? loopComp((<Skeleton />), 10) : 
        movies.map((movie) => {
            return <Thumbnail movieData={movie} type={type}/>
        })
    }

    

    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails(props.type)}

                {/* {loopComp (
                 (<Thumbnail />), 10
              )}
              */}
            </div>
        </div>
    )
}

const Thumbnail = (props) => {
    const thumbSize = (type) => {
        if(type === 'large-v'){
            return '400';
        }
        if(type === 'small-v'){
            return '185';
        }
        if(type === 'large-h'){
            return '500';
        }
        if(type === 'small-h'){
            return '342';
        }
    }
    return (<div className="media-row__thumbnail">
        <img src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${props.movieData.poster_path}`} />
        <div className="media-row__top-layer">
            <i className="fas fa-play" />
        </div>
    </div>)
}

const Skeleton = () => {
    return (<div className="media-row__thumbnail-skeleton">
        <div className="media-row__thumbnail-skeleton-img"></div>
    </div>)
}

export default MediaRow; 