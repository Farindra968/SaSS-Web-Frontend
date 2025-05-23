import axios from "axios"

const baseApi = "http://localhost:5000/auth"

const getBook =async()=>{
    const response = await axios.get(`${baseApi}/book`)
    return response.data
}

const getBookById = async (id)=> {
    const response = await axios.get(`${baseApi}/book/${id}`)
    return response.data
}

const deleteBook = async (id)=>{
    const response= await axios.delete(`${baseApi}/book/${id}`);
    return response.data
}
export  {getBook, getBookById, deleteBook}; 