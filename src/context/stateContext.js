import React, { createContext, useState, useEffect } from "react"
import ImageService from "../services/imageService"

// AuthContext gives us provider and consumer, form of global state
export const StateContext = createContext()

// children meaning the components 
export default ({ children }) => {
    const [images, setImages] = useState(null)

    const getImages = () => {
        ImageService.getImages().then( data => {
            console.log(data)
            setImages(data)
        })
    }


    useEffect(() => {
        getImages()
    }, [])

    return(
        <div>
            { 
                images === null ? 
                <h1>loading...</h1> 
                : 
                <StateContext.Provider value={{ images, setImages, getImages }}>
                    { children }
                </StateContext.Provider>
            }
        </div>
    )
}