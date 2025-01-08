import { useQuery } from '@tanstack/react-query';

import { CALENDAR_QUERY_KEY, SUNDAYS_OF_YEAR_QUERY_KEY } from '../constants';
import { CalendarResponseHttpData, SudaysOfYearHttpData } from '../types/calendar';
import { getAllSundaysOfYearWithMonth, getAllSundaysOfYear } from '../services';

export const useFetchSundaysOfYear = () =>
    useQuery<SudaysOfYearHttpData[]>({
        queryKey: [SUNDAYS_OF_YEAR_QUERY_KEY],
        queryFn: () => getAllSundaysOfYear(),
        staleTime: Infinity
    })

export const useCalendar = (year: number) => 
    useQuery<CalendarResponseHttpData>({
        queryKey: [CALENDAR_QUERY_KEY, year],
        queryFn: () => getAllSundaysOfYearWithMonth(year),
        staleTime: Infinity
    });
