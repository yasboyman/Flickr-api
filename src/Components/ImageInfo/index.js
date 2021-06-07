import React from 'react'
import './index.css'


const ImageInfo = ({src, alt, info}) => {

    return (
        <div className={'image-info'}>
            <div className={'image'}>
                <img src={src} alt={alt}/>
            </div>
            <h5>
                <a href={info.photo && info.photo.urls.url[0]._content}> {info.photo && info.photo.title._content}  </a>
                'by' {info.photo && info.photo.owner.realname} </h5>
            <p> Description: {info.photo && info.photo.description._content.length > 1 ? info.photo.description._content :
                'No description available'}
            </p>
            <p>Tags:{info.photo && info.photo.tags.tag.map(x => {
                    return ` ${x._content} `
                })
                }
            </p>
        </div>
    )
}

export default ImageInfo