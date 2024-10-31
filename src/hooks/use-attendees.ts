import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ATTENDEE_QUERY_KEY, ATTENDEES_QUERY_KEY } from "../constants";
import { createNewAttendee, deleteAttendee, getAllAttendees, getAttendeesById } from "../services";
import { AttendeesResponseHttpData } from "../types";

export const useAttendees = () => 
    useQuery<AttendeesResponseHttpData[]>({
        queryKey: [ATTENDEES_QUERY_KEY],
        queryFn: () => getAllAttendees(),
        staleTime: Infinity
    });

export const useAttendee = (id: string = "") =>
    useQuery<any>({
        queryKey: [ATTENDEE_QUERY_KEY, id],
        queryFn: () => getAttendeesById(id),
        staleTime: Infinity
    })

export const useMutateAttendees = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createNewAttendee,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ATTENDEES_QUERY_KEY] })
        }
    })
}

export const useMutateDeleteAttendee = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => deleteAttendee(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ATTENDEES_QUERY_KEY] })
        },
        onError: (error) => {
            console.error("Error deleting attendee:", error);
        },
    })
}
    