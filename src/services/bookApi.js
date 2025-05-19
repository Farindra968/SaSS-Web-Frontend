import axios from "axios"

const baseApi = "http://localhost:5000"

const getBook =async()=>{
    const response = await axios.get(`${baseApi}/book`)
    return response.data
}

export default getBook;