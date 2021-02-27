import React, { useEffect, useState } from 'react'
import axios from "axios"

const ImagesRender = () => {

    const [ images, setImages ] = useState(null)

    useEffect( () => {
        axios.get("https://cr-cloudinary-backend.herokuapp.com/images")
             .then( response => setImages(response.data))
             .catch( error => console.log(error))
    }, [])


    return (
        <div>
            <h2>Images Render</h2>
            {
                images === null ? <div>Loading... </div> :
                <div className="images-wrapper">
                    {
                        images.map( image  => (
                            <div key={image.id}>
                                <img src={image.image_url} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default ImagesRender