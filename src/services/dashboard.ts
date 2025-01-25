import { API_BASE_URL } from "../constants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getDashboardMetrics = async () => {
    try {
        const response = await axiosInstance.get('/dashboard/metrics')
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Dashboard");
    }
}
