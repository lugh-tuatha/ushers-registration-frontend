import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_BY_TYPE_AND_STATUS_QUERY_KEY, ATTENDANCE_QUERY_KEY } from "../constants";
import { checkIn, getAttendance, getAttendanceByTypeAndStatus } from "../services/attendance";

export const useAttendance = (type: string = "", week: number) =>
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY, type, week],
        queryFn: () => getAttendance(type, week),
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