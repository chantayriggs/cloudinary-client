import axios from "axios"
import { useState } from "react"
import ImagesRender from "./imagesRender"
import "./styles/main.scss"

const App = () => {

  const [ imageSelected, setImageSelected ] = useState(null)


  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "cv9qngna")
    axios.post("https://api.cloudinary.com/v1_1/dbay2drit/image/upload", formData)
         .then(response => {
           const data = {
             "image_url": response.data.url
           }
           axios.post("https://cr-cloudinary-backend.herokuapp.com/image", data)
                .then( response => console.log(response))
                .catch( error => console.log(error))
         })
         .catch( error => console.log(error))
  }


  return (
    <div>

      <div className="upload-wrapper">
        <h1>Upload new image</h1>
        <input type="file" onChange={ event => setImageSelected(event.target.files[0])} />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <ImagesRender />
    </div>
  )
}

export default App
