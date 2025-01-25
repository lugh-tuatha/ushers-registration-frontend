import { useQuery } from '@tanstack/react-query';

import { REPORT_QUERY_KEY } from '../constants';
import { ReportResponseHttpData } from '../types';
import { getWeeklyAttendanceSummary } from '../services';

export const useWeeklyAttendanceSummary = (week_no: number, type: string) =>
    useQuery<ReportResponseHttpData>({
        queryKey: [REPORT_QUERY_KEY, week_no, type],
        queryFn: () => getWeeklyAttendanceSummary(week_no, type),
        staleTime: Infinity
    })