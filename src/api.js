import axios from "axios";

let request = axios.create({
    baseURL:'http://localhost:3000'
})
let request2 = axios.create({
    baseURL:'http://localhost:8080'
})
export default {
    request,
    request2
}