import { API_BASE_URL } from "../constants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getAllSundaysOfYear = async (year: number): Promise<any> => {
    try {
        const response = await axiosInstance.get('/calendar/sundays/' + year)
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Sundays");
    }
}