import { useLocation } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { Flex, Grid, Heading, Select } from "@chakra-ui/react";

import Layout from "../../components/layout";
import BreadCrumb from "../../components/ui/breadcrumb";
import DashboardCard from "./dashboard-card";

import { generateBreadcrumb } from "../../utils";

import { DashboardFilterDateOptions } from "../../assets/data/calendar/dashboard-filter-date-options";
import { useRegularDiscipleCount } from "../../stores";

const data = [
    {name: 'Jan 5, 2025', attendees: 104, pv: 2400, amt: 2400},
    {name: 'Jan 12, 2025', attendees: 195, pv: 2400, amt: 2400},
    {name: 'Jan 19, 2025', attendees: 193, pv: 2400, amt: 2400},
];

export default function Dashboard() {
    const regulars = useRegularDiscipleCount((state) => state.regulars)

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

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
                    value={300}
                    description="Total Attendees This Year"
                />

                <DashboardCard 
                    title="Regular Disciple"
                    value={regulars}
                    description="Total Children This Year"
                />

                <DashboardCard 
                    title="Children Overview"
                    value={300}
                    description="Total Children This Year"
                />

                <DashboardCard 
                    title="Total VIP"
                    value={300}
                    description="Total Children This Year"
                />
            </Grid>

            <Heading size="md" my="2">Attendance Trends</Heading>
            <LineChart
                width={1200} 
                height={300} 
                data={data}
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
