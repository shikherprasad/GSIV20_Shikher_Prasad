import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`,
});

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/original/";

const api = {
    get: async function (url) {
        try {
            const response = await instance.get(`${url}/?api_key=${process.env.REACT_APP_APIKEY}`);
            console.log(response);
            return response.data;
        } catch (err) {
            return this.returnErrResponse(err);
        }
    },
    returnErrResponse: async (error) => {
        const { response } = error;
        if (response) {
            console.log("returnErrResponse/response", response);
            alert(response.data.status_message);
        } else if (error.request) {
            // The request was made but no response was received
            alert("Network error");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("returnErrResponse/error", error.message);
        }
        return { error: true };
    },
};

export default api;
