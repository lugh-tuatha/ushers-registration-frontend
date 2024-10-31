import { API_BASE_URL } from "../constants";

import axios from "axios";

export const getAllSundaysOfYear = async (year: number): Promise<any> => {
    try {
        const response = await axios(API_BASE_URL + '/calendar/sundays/' + year)
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Sundays");
    }
}