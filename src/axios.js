import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ca6d5.cloudfunctions.net/api",
});
// "http://localhost:5001/clone-ca6d5/us-central1/api",

export default instance;
