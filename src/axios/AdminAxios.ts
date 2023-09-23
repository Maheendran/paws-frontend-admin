import axios from "axios";

import { url } from "../Redux/Api";

const adminInstance =axios.create({
    baseURL:url,
    withCredentials:true
})
export default adminInstance

