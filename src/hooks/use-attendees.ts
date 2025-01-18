import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ATTENDEE_QUERY_KEY, ATTENDEES_BY_HIERARCHY_QUERY_KEY, ATTENDEES_QUERY_KEY } from "../constants";
import { createNewAttendee, deleteAttendee, getAllAttendees, getLeaderAttendees, getAttendeesById, updateAttendee } from "../services";
import { AttendeesResponseHttpData, CreateNewAttendeeBody, UpdateAttendeeBody } from "../types";

export const useAttendees = (search: string | undefined = undefined) => 
    useQuery<AttendeesResponseHttpData[]>({
        queryKey: [ATTENDEES_QUERY_KEY, search],
        queryFn: () => getAllAttendees(search),
    });

export const useAttendee = (id: string = "") =>
    useQuery<any>({
        queryKey: [ATTENDEE_QUERY_KEY, id],
        queryFn: () => getAttendeesById(id),
        staleTime: Infinity
    })

export const useGetLeaderAttendees = () =>
    useQuery<any>({
        queryKey: [ATTENDEES_BY_HIERARCHY_QUERY_KEY],
        queryFn: () => getLeaderAttendees(),
    })

export const useCreateAttendee = (queryKey: string[]) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: CreateNewAttendeeBody) => createNewAttendee(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey })
        }
    })
}

export const useUpdateAttendee = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: UpdateAttendeeBody) => updateAttendee(body),
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