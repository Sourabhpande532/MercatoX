import axios from "axios";
const API_URL = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

async function request(method, url, body = null) {
  try {
    const res = await API_URL({
      method,
      url,
      data: body,
    });

    return res?.data?.data;
  } catch (err) {
    const message = err.response?.data?.error || err.message || "API Error";
    throw new Error(message);
  }
}
export const apiGet = (url) => request("GET", url);
export const apiPost = (url, body) => request("POST", url, body);
export const apiPut = (url, body) => request("PUT", url, body);
export const apiDelete = (url) => request("DELETE", url);

export default API_URL;
