import axios from "axios";

export async function GetApi (){
    const response =  await axios.get("http://127.0.0.1:5000/books")
    return response.data.tasks
}

export async function SearchApi (searchQuery){
    const search =  await axios.get(`http://127.0.0.1:5000/api/books?q=${searchQuery}`)
    return search.data
}