import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

const GetProducts=()=>(dispatch)=>{
    return axios.get("http://localhost:2000/products")
    .then(response=>dispatch({
        type:GET_PRODUCTS,
        payload:response.data,
    }))
    .catch(error=>console.log(error))
}

export default GetProducts;