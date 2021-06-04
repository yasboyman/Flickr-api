import React,{useState,useEffect} from 'react';
import Image from "../Image";
import axios from "axios";

const Picture = ({src,alt, id}) => {

    const [info, setInfo] = useState([])




    useEffect(() => {
        id &&  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ac27434a1132e8a9e3b43994d9ca1df4&photo_id=${id}&format=json&nojsoncallback=1`)
            .then((response) => {
                console.log('THIS IS ID INFO',response.data)
            }, (error) => {
                console.log(error);
            })
    }, [])

    if (!id) return null;

    return(
        <div className='main-container'>
            <Image
            src={src}
            alt={alt}
            />

        </div>

    )
}

export default Picture