import { useQuery } from '@tanstack/react-query';

import { DASHBOARD_METRICS_QUERY_KEY } from '../constants';
import { getDashboardMetrics } from '../services/dashboard';
import { DashboardResponseHttpData } from '../types';

export const useDashboardMetrics = () =>
    useQuery<DashboardResponseHttpData>({
        queryKey: [DASHBOARD_METRICS_QUERY_KEY],
        queryFn: () => getDashboardMetrics(),
        staleTime: Infinity
    })