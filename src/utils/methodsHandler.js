import axios from "axios";

const api=axios.create({
    baseURL:'https://word-frequency.onrender.com'
})

export const getURLData=(data)=>{
    return api.post("/api/v1/calculateFrequency",data);
}