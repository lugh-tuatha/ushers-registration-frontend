import axios from "axios";

import { API_BASE_URL } from "../constants";
import { CreateNewAttendeeBody, UpdateAttendeeBody, AttendeesResponseHttpData } from "../types";

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

export const getAllAttendees = async (search = "") => {
    try {
        const response = await axiosInstance.get<any>("/attendees?search=" + search);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendees");
    }
}

export const getAttendeesById = async (id: string) => {
    try {
        const response = await axiosInstance.get<any>("/attendees/" + id)
        return response.data.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch attendee")
    }
}

export const getAttendeesByHierarchy = async (hierarchy: string) => {
    try {
        const response = await axiosInstance.get<any>("/attendees/hierarchy/" + hierarchy)
        return response.data.data
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch attendee")
    }
}

export const createNewAttendee = async (body: CreateNewAttendeeBody) => {
    try {
        const response = await axiosInstance.post("/attendees", body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create new attendees");
    }
}

export const updateAttendee = async (body: UpdateAttendeeBody) => {
    try {
        const response = await axiosInstance.put("/attendees" + `/${body._id}`, body)
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to edit attendee");
    }
}

export const deleteAttendee = async (id: string) => {
    try {
        const response = await axiosInstance.delete("/attendees/" + id)
        return response
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete attendee");
    }
}