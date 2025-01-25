import { API_BASE_URL } from "../constants";

import axios from "axios";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getWeeklyAttendanceSummary = async (week_no: number, type: string) => {
    try {
        const response = await axiosInstance.get(`/report/weekly-attendance-summary?week_no=${week_no}&attendance_type=${type}`)
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Reports");
    }
}