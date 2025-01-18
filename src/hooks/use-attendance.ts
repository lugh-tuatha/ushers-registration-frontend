import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_BY_TYPE_AND_STATUS_QUERY_KEY, ATTENDANCE_QUERY_KEY, ATTENDANCE_REPORT_QUERY_KEY } from "../constants";
import { checkIn, getAllAttendanceByType, getAttendanceByTypeAndStatus, getAttendanceReport } from "../services/attendance";

export const useAttendanceByType = (type: string = "", week: number) => 
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY, type, week],
        queryFn: () => getAllAttendanceByType(type, week),
        staleTime: Infinity
    })

export const useAttendanceByTypeAndStatus = (type: string, week: number, status: string) =>
    useQuery<any>({
        queryKey: [ATTENDANCE_BY_TYPE_AND_STATUS_QUERY_KEY, type, week, status],
        queryFn: () => getAttendanceByTypeAndStatus(type, week, status),
        staleTime: Infinity
    })

export const useGetAttendeesReport = (type: string, week: number) => 
    useQuery<any>({
        queryKey: [ATTENDANCE_REPORT_QUERY_KEY, type, week],
        queryFn: () => getAttendanceReport(type, week),
        staleTime: Infinity
    })


export const useMutatecheckIn = () => {
    return useMutation({
        mutationFn: checkIn,
    })
}