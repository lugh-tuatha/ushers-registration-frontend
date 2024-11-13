import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_QUERY_KEY } from "../constants";
import { checkIn, getAllAttendanceByType } from "../services/attendance";

export const  useSundayAttendanceByType = (type: string) => 
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY, type],
        queryFn: () => getAllAttendanceByType(type),
        staleTime: Infinity
    })

export const useMutatecheckIn = () => {
    return useMutation({
        mutationFn: checkIn,
    })
}