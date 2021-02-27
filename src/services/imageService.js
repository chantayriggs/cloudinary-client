// services makes calls to our backend so we don't have to deal with that in our components

import axios from "axios"

export default {
    getImages: () => {
        return axios.get("https://cr-cloudinary-backend.herokuapp.com/images")
              .then(response => response.data)
              .catch(error => error)
    },

	postImage: image_url => {
            axios.post("https://cr-cloudinary-backend.herokuapp.com/image", image_url)
                .then( response => console.log(response))
                .catch( error => console.log(error))
	},

	deleteImage: id => {
		return axios.delete(`https://cr-cloudinary-backend.herokuapp.com/image/${id}`)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
	},

	editTodo: (id, editBody) => {
		return axios.put(`https://cr-cloudinary-backend.herokuapp.com/image/${id}`, editBody)
                    .then( response => console.log(response))
                    .catch(error => console.log(error))
	}
}