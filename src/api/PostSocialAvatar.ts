import axios from "axios"
import { configuration } from "../utils/config"

export const PostSocialAvatar = async (file: File) => {




    const formData = new FormData()
    formData.append('image', file)
    try {
        const responce = await axios.post(configuration().baseUrl + '/home/avatar', formData)
        return responce.data
    }
    catch (err) {
        console.error('Error uploading file:', err);
    }

}