import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_QUERY_KEY, ATTENDANCE_REPORT_QUERY_KEY } from "../constants";
import { checkIn, getAllAttendanceByType, getAttendanceReport } from "../services/attendance";

export const useAttendanceByType = (type: string, week: number) => 
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY, type, week],
        queryFn: () => getAllAttendanceByType(type, week),
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

