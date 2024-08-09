import { getCookie } from "src/utilities/Authentication";

export const retrieveAccessToken = () => {
  const token = localStorage.getItem("access");
  const cookieToken = getCookie("access");
  if (token) {
    return token;
  } 
  return cookieToken;
};
export const eraseCookie = (name, path = "/") => {
  const extractMainDomain = ".keywordsai.co";
  const domain = extractMainDomain;
  document.cookie =
    name + "=; Max-Age=-99999999; domain=" + domain + "; path=" + path;
};
