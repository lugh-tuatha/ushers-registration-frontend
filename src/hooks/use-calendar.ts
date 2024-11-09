import { useQuery } from '@tanstack/react-query';

import { CALENDAR_QUERY_KEY } from '../constants';
import { CalendarResponseHttpData } from '../types/calendar';
import { getAllSundaysOfYear } from '../services';

export const useCalendar = (year: number) => 
    useQuery<CalendarResponseHttpData>({
        queryKey: [CALENDAR_QUERY_KEY, year],
        queryFn: () => getAllSundaysOfYear(year),
        staleTime: Infinity
    });