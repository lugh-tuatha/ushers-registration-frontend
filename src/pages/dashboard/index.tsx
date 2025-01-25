import { useLocation } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { Flex, Grid, Heading, Select } from "@chakra-ui/react";

import Layout from "../../components/layout";
import BreadCrumb from "../../components/ui/breadcrumb";
import DashboardCard from "./_components/dashboard-card";

import { generateBreadcrumb } from "../../utils";

import { DashboardFilterDateOptions } from "../../assets/data/calendar/dashboard-filter-date-options";
import { useDashboardMetrics } from "../../hooks/use-dashboard";

export default function Dashboard() {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    const { data: dashboardMetrics } = useDashboardMetrics()
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex gap='4' alignItems='center' my="2">
                <Select
                    w={{base: '50%', md: "25%"}}
                >
                    {DashboardFilterDateOptions?.map((option: any) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <Select 
                    w={{base: '50%', md: "25%"}}
                >
                    <option value="sunday">Sunday</option>
                    <option value="prayer-night">Prayer Night</option>
                    <option value="valenzuela">Valenzuela</option>
                </Select>
            </Flex>

            <Heading size="md">Overview</Heading>

            <Grid templateColumns='repeat(4, 1fr)' gap={6} mt="2">
                <DashboardCard 
                    title="Attendees (Overall)"
                    value={dashboardMetrics?.total_attendees}
                    description="Total Attendees This Year"
                />

                <DashboardCard 
                    title="Regular Disciple"
                    value={dashboardMetrics?.regular_disciple}
                    description="Total Disciple This Year"
                />

                <DashboardCard 
                    title="Children Overview"
                    value={dashboardMetrics?.children}
                    description="Total Children This Year"
                />

                <DashboardCard 
                    title="Total VIP"
                    value={dashboardMetrics?.vips}
                    description="Total VIP This Year"
                />
            </Grid>

            <Heading size="md" my="2">Attendance Trends</Heading>
            <LineChart
                width={1200} 
                height={300} 
                data={dashboardMetrics?.attendance_trends}
            >
                <Line type="monotone" dataKey="attendees" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </Layout>
    )
}
