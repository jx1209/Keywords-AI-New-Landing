import axios from "axios";
const apiurl = import.meta.env.VITE_BACKEND_URL || "https://api.keywordsai.co/";
const genericDomain = import.meta.env.VITE_KEYWORDS_DOMAIN || "kewordsai.co"; // for all subdomains, .keywordsai.co
const extractMainDomain =
  "." +
  (window.location.hostname.includes("keywordsai.co")
    ? genericDomain
    : window.location.hostname);
// const extractMainDomain = genericDomain;
const expirationDays = 7;
const bypassAuth = false;
export const isUserLoggedIn = async () => {
  if (bypassAuth) return true;
  await getCSRF();
  try {
    const response = await axios.get(`${apiurl}auth/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      timeout: 5000,
    });

    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const signup = async ({
  email,
  password,
  firstname,
  lastname,
  organization,
  endpoint = "api/subscribe",
}) => {
  try {
    await getCSRF();
    const formData = new FormData();

    formData.append("email", email);

    // Make the POST request
    const response = await axios.post(apiurl + endpoint, formData, {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
        "Content-Type": "multipart/form-data",
      },
      timeout: 5000,
    });
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out");
    } else if (
      error.code === "ERR_BAD_REQUEST" &&
      error.response.status === 400
    ) {
      if (error.response.data.email) {
        throw new Error(error.response.data.email[0]);
      } else if (error.response.data.password) {
        throw new Error(error.response.data.password[0]);
      }
    } else {
      throw error;
    }
  }
};

export const joinwaitlist = async ({
  email,
  firstname,
  lastname,
  organization,
}) => {
  try {
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("first_name", firstname);
    formdata.append("last_name", lastname);
    formdata.append("organization_name", organization);

    // Axios request
    const response = await axios({
      method: "post",
      url: `${apiurl}api/subscribe/`,
      data: formdata,
      headers: { "Content-Type": "application/json" },
    });
    // Assuming the response is text-based; adjust if it's JSON or other format
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    await getCSRF(); // Assuming getCSRF() is a function you've defined elsewhere

    const response = await axios.post(
      `${apiurl}auth/jwt/create/`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
      }
    );
    if (response.status === 200) {
      const responseData = response.data;
      setCookie("access_token", responseData.access, expirationDays);
      setCookie("refresh_token", responseData.refresh, expirationDays);
      const nextStation = new URLSearchParams(window.location.search).get(
        "next"
      );
      return nextStation || "/platform/overview";
    }
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST" && error.response.status === 401) {
      throw new Error("Incorrect email or password.");
    }
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out");
    }
    throw error;
  }
};

export const logout = () => {
  eraseCookie("access_token");
  eraseCookie("refresh_token");
};

export const getCookie = (name = "csrftoken") => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const getCSRF = async () => {
  try {
    await axios.get(`${apiurl}csrf`, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });
    // Axios automatically handles the CSRF token set in the cookie
  } catch (error) {
    throw error;
  }
};

export const feedback = async ({ content, file_or_image }) => {
  try {
    await getCSRF();

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("content", content);

    // Check if file_or_image is not empty and append the first file
    if (file_or_image && file_or_image.length > 0) {
      formData.append("file_or_image", file_or_image[0]);
    }
    const response = await axios.post(`${apiurl}api/feedback/`, formData, {
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
        "Content-Type": "multipart/form-data",
      },
      timeout: 5000,
    });

    const responseData = response.data;
    // Handle response data here
  } catch (error) {
    // Handle error here
    throw error;
  }
};

function setCookie(name, value, expirationDays, domain = extractMainDomain) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000); // Calculate expiration date
  const expires = "expires=" + date.toUTCString();
  console.log(
    "cookie",
    name +
      "=" +
      encodeURIComponent(value) +
      ";" +
      expires +
      ";path=/;domain=" +
      domain +
      ";secure; SameSite=Lax"
  );
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    ";" +
    expires +
    ";path=/;domain=" +
    domain +
    ";secure; SameSite=Lax";
}
function eraseCookie(name, path = "/") {
  const domain = extractMainDomain;
  document.cookie =
    name + "=; Max-Age=-99999999; domain=" + domain + "; path=" + path;
}
