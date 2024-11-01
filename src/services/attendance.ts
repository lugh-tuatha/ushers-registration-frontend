import axios from "axios"

import { API_BASE_URL } from "../constants"

export const getAllAttendance = async () => {
    try {
        const response = await axios.get(API_BASE_URL + "/attendance/type/sunday")
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}