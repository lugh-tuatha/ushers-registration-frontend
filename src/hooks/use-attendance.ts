import { useMutation, useQuery } from "@tanstack/react-query";

import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_QUERY_KEY } from "../constants";
import { checkIn, getAllAttendance } from "../services/attendance";

export const  useSundayAttendance = () => 
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY],
        queryFn: () => getAllAttendance(),
        staleTime: Infinity
    })

export const useMutatecheckIn = () => {
    return useMutation({
        mutationFn: checkIn,
    })
}