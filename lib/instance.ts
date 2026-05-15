import axios from "axios";

const axiosInstance8000 = axios.create({
    baseURL: 'https://beprod.dashx.xyz/', 
});

axiosInstance8000.interceptors.request.use(
    (request) => {
        // const accessToken = localStorage.getItem("accessToken");
        // if (accessToken) {
        //     request.headers["Authorization"] = `Bearer ${accessToken}`;
        // }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance8000.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;

        // Handle unauthorized access (401)
        if (response && response.status === 401) {
            console.error("Unauthorized access - possibly invalid token");
            // Optionally, redirect the user to the login page or clear the token
            localStorage.removeItem("accessToken");
            // Redirect to login page or handle logout
        }

        return Promise.reject(error);
    }
);

export default axiosInstance8000;
