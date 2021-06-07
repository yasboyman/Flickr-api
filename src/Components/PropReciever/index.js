import React, {useState, useEffect} from 'react';
import Image from "../ImageInfo";
import axios from "axios";
import './index.css'

const PropRecviever = ({src, alt, imageID, data}) => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        imageID && axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ac27434a1132e8a9e3b43994d9ca1df4&photo_id=${imageID}&format=json&nojsoncallback=1`)
            .then((response) => {
                setInfo(response.data)
            }, (error) => {
                console.log(error);
            })
    }, [imageID])

    if (!imageID) return null;
    console.log('DATA', data)
    console.log('INFOOOOO', info)

    return (
        <div className={'card-container'}>
            <Image
                src={src}
                alt={alt}
                info={info}
            />
        </div>
    )
}

export default PropRecviever