import axios from "axios"
import { configuration } from "../utils/config"

export const FetchAllHomePageData = async () => {
    try {
        const responce = await axios.get(configuration().baseUrl + '/home/all')
        return responce.data
    }
    catch (err) {
        console.error('Error uploading file:', err);
    }

}