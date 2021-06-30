// popular fetching library
// passing total amount to the api so that it charges to the user 

import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-68c57/us-central1/api',
});

export default instance;