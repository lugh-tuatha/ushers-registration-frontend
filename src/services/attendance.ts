import axios from "axios"

import { API_BASE_URL } from "../constants"
import { checkInBody } from "../types";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getAllAttendance = async () => {
    try {
        const response = await axiosInstance.get("/attendance/type/sunday")
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}

export const checkIn = async (body: checkInBody) => {
    try {
        const response = await axiosInstance.post("/attendance", body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create new attendees");
    }
}