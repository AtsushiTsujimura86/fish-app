const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://fish-creater-api.vercel.app/api";

export default API_URL;