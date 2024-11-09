import axios from "axios"

import { API_BASE_URL } from "../constants"
import { checkInBody } from "../types";

export const getAllAttendance = async () => {
    try {
        const response = await axios.get(API_BASE_URL + "/attendance/type/sunday")
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}

export const checkIn = async (body: checkInBody) => {
    try {
        const response = await axios.post(API_BASE_URL + "/attendance", body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create new attendees");
    }
}