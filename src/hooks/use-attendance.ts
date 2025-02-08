import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import {
    ATTENDANCE_BY_TYPE_AND_STATUS_QUERY_KEY,
    ATTENDANCE_QUERY_KEY,
    FILTERED_ATTENDANCE_QUERY_KEY
} from "../constants";
import {checkIn, getAttendance, getAttendanceByTypeAndStatus, getFilteredAttendance} from "../services/attendance";

export const useAttendance = (type: string = "", week: number) =>
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY, type, week],
        queryFn: () => getAttendance(type, week),
        staleTime: Infinity
    })

export const useFilterAttendance = (attendance_type: string, church_hierarchy: string, week_no: number)=>
    useQuery<any>({
        queryKey: [FILTERED_ATTENDANCE_QUERY_KEY, attendance_type, church_hierarchy, week_no],
        queryFn: () => getFilteredAttendance(attendance_type, church_hierarchy, week_no),
        staleTime: Infinity
    })

export const useAttendanceByTypeAndStatus = (type: string, week: number, status: string) =>
    useQuery<any>({
        queryKey: [ATTENDANCE_BY_TYPE_AND_STATUS_QUERY_KEY, type, week, status],
        queryFn: () => getAttendanceByTypeAndStatus(type, week, status),
        staleTime: Infinity
    })

export const useMutatecheckIn = () => {
    return useMutation({
        mutationFn: checkIn,
    })
}