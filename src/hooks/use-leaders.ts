import { useQuery } from '@tanstack/react-query';

import { LEADERS_QUERY_KEY } from '../constants';
import { LeadersResponseHttpData } from '../types';
import { getAllLeaders } from '../services';

export const useLeaders = () =>
    useQuery<LeadersResponseHttpData[]>({
        queryKey: [LEADERS_QUERY_KEY],
        queryFn: () => getAllLeaders(),
        staleTime: Infinity
    })