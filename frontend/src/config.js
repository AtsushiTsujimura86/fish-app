const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://fish-app-backend-ten.vercel.app/api";

export default API_URL;