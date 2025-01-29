import { API_BASE_URL } from "../constants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getLeadersByType = async (type: string) => {
    try {
        const response = await axiosInstance.get('/leaders?type=' + type)
        return response.data.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Leaders");
    }
}
