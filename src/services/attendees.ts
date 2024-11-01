import axios from "axios";

import { API_BASE_URL } from "../constants";
import { CreateNewAttendeeBody } from "../types";

export const getAllAttendees = async (search = ""): Promise<any> => {
    try {
        const response = await axios.get(API_BASE_URL + "/attendees?search=" + search);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}

export const getAttendeesById = async (id: string): Promise<any> => {
    try {
        const response = await axios.get(API_BASE_URL + "/attendees/" + id)
        return response.data.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendee")
    }
}

export const createNewAttendee = async (body: CreateNewAttendeeBody) => {
    try {
        const response = await axios.post(API_BASE_URL + "/attendees", body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create new attendees");
    }
}

export const deleteAttendee = async (id: string) => {
    try {
        const response = await axios.delete(API_BASE_URL + "/attendees/" + id)
        return response
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete attendee");
    }
}