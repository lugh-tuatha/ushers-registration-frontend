import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ATTENDEES_QUERY_KEY } from "../constants";
import { createNewAttendee, deleteAttendee, getAllAttendees } from "../services";
import { AttendeesResponseHttpData } from "../types";



export const useAttendees = () => 
    useQuery<AttendeesResponseHttpData[]>({
        queryKey: [ATTENDEES_QUERY_KEY],
        queryFn: () => getAllAttendees(),
        staleTime: Infinity
    });

export const useMutateAttendees = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createNewAttendee,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ATTENDEES_QUERY_KEY] })
            close()
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
    