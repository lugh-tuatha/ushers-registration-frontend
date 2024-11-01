import { useQuery } from "@tanstack/react-query";
import { AttendanceResponseHttpData } from "../types";
import { ATTENDANCE_QUERY_KEY } from "../constants";
import { getAllAttendance } from "../services/attendance";

export const  useAttendance = () => 
    useQuery<AttendanceResponseHttpData[]>({
        queryKey: [ATTENDANCE_QUERY_KEY],
        queryFn: () => getAllAttendance(),
        staleTime: Infinity
    })