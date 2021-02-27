import React, { useContext } from 'react'
import { StateContext } from "../src/context/stateContext"
import ImagesService from "../src/services/imageService"



const ImagesRender = () => {

    const stateContext = useContext(StateContext)

    const handleDelete = id => {
        ImagesService.deleteImage(id)
    }


    return (

        <div>
        <h2>Images Render</h2>
            <div className="images-wrapper">
                {
                    stateContext.images.map( image  => (
                        <div className="image-delete-wrapper" key={image.id}>
                            <img src={image.image_url} />
                            <button onClick={ () => handleDelete(image.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
    </div>
    )
}

export default ImagesRender