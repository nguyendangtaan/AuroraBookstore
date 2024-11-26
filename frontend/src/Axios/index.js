import axios from "axios";

const intance= axios.create( {
    baseURL: "http://localhost:3004",
    timeout:3000,
    headers:{
        "Content-Type":"application/json"
    }
}  )
export default intance