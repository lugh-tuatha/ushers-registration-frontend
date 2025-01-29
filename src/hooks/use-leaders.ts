import { useQuery } from '@tanstack/react-query';

import { LEADERS_QUERY_KEY } from '../constants';
import { LeadersResponseHttpData } from '../types';
import { getLeadersByType } from '../services';

export const useLeadersByType = (type: string = "primary-leader") =>
    useQuery<LeadersResponseHttpData[]>({
        queryKey: [LEADERS_QUERY_KEY, type],
        queryFn: () => getLeadersByType(type),
        staleTime: Infinity
    })