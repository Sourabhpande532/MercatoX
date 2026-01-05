const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

async function request(method, url, body = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // fetch does NOT allow body for GET
    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);

    const data = await response.json();

    // fetch does NOT throw errors automatically
    if (!response.ok) {
      throw new Error(data?.error || data?.message || "API Error");
    }

    // match axios helper return style
    return data?.data;
  } catch (error) {
    throw new Error(error.message || "Fetch API Error");
  }
}

export const apiGets = (url) => request("GET", url);
export const apiPost = (url, body) => request("POST", url, body);
export const apiPut = (url, body) => request("PUT", url, body);
export const apiDelete = (url) => request("DELETE", url);
