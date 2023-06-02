import axios from "axios";

export async function pData(){
    const products = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    return products; 
}