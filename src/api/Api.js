import axios from "axios";
import { baseUrl } from "../Urls";
export async function productData(){
    const products = await axios.get(`${baseUrl}/api/v1/products`)
    return products
}