import axios from "axios";
import { CreateNewAttendeeBody } from "../types";

export const getAllAttendees = async (query = ""): Promise<any> => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/attendees");
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}

export const createNewAttendee = async (body: CreateNewAttendeeBody) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/attendees", body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create new attendees");
    }
}

export const deleteAttendee = async (id: string) => {
    try {
        const response = await axios.delete("http://localhost:5000/api/v1/attendees/" + id)
        return response
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete attendee");
    }
}