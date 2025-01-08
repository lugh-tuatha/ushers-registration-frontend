import Layout from '../../components/layout'
import StatCard from './_components/stat-card';

// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {name: 'Jan 5, 2025', attendees: 372, pv: 2400, amt: 2400},
    {name: 'Jan 12, 2025', attendees: 300, pv: 2400, amt: 2400},
    {name: 'Jan 19, 2025', attendees: 320, pv: 2400, amt: 2400},
    {name: 'Jan 26, 2025', attendees: 283, pv: 2400, amt: 2400},
    {name: 'Feb 02, 2025', attendees: 276, pv: 2400, amt: 2400},
    {name: 'Feb 09, 2025', attendees: 307, pv: 2400, amt: 2400},
    {name: 'Feb 16, 2025', attendees: 189, pv: 2400, amt: 2400},
    {name: 'Feb 23, 2025', attendees: 269, pv: 2400, amt: 2400},
    {name: 'Mar 02, 2025', attendees: 205, pv: 2400, amt: 2400},
];

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Heading,
    Alert,
    AlertIcon,
    Box,
    Flex,
    Spinner,
    Text, 
} from '@chakra-ui/react'

import { FaPeopleLine } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { BsArrowRepeat } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";

import { useGetAttendeesReport } from '../../hooks/use-attendance';

export default function Reports() {
    const { data: attendanceReportData, isLoading } = useGetAttendeesReport('sunday', 1)
    console.log(attendanceReportData?.vips)
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Reports</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            
            <Tabs>
                <TabList>
                    <Tab>Weekly</Tab>
                    <Tab>Monthly</Tab>
                    <Tab>Yearly</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='1'>

                        {!isLoading && data ? (
                            <>
                                <Heading size='sm' mt="4">VIPs</Heading>
                                <Box display='flex' flexDirection={{base: 'column', md: 'row'}} mt='1' gap='4'>
                                    <StatCard 
                                        label="First Timer (This Week)"
                                        value={attendanceReportData?.vips.first_timer.count}
                                        change_percentage={attendanceReportData?.vips.first_timer.change_percentage}
                                        icon={<TiUserAdd size={70} />} 
                                    />

                                    <StatCard 
                                        label="Second Timer (This Week)"
                                        value={attendanceReportData?.vips.second_timer.count}
                                        change_percentage={attendanceReportData?.vips.second_timer.change_percentage}
                                        icon={<BsArrowRepeat size={70} />} 
                                    />

                                    <StatCard 
                                        label="Third Timer (This Week)"
                                        value={attendanceReportData?.vips.third_timer.count}
                                        change_percentage={attendanceReportData?.vips.third_timer.change_percentage}
                                        icon={<GiAchievement size={70} />} 
                                    />

                                    <StatCard 
                                        label="Fourth Timer (This Week)"
                                        value={attendanceReportData?.vips.fourth_timer.count}
                                        change_percentage={attendanceReportData?.vips.fourth_timer.change_percentage}
                                        icon={<GrAchievement size={70} />} 
                                    />
                                </Box>

                                <Heading size='sm' mt="4">Attendees</Heading>
                                <Box mt="1" gap='4' display='flex' flexDirection={{base: 'column', md: 'row'}}>
                                    <StatCard 
                                        label="Total Attendees (This Week)"
                                        value={attendanceReportData?.attendees}
                                        change_percentage={attendanceReportData?.attendees_change_percentage}
                                        icon={<FaChurch size={70} />} 
                                    />
        
                                    <StatCard 
                                        label="Average Attendees (Weekly)"
                                        value={attendanceReportData?.average_attendees}
                                        change_percentage={attendanceReportData?.average_attendees_change_percentage}
                                        icon={<FaPeopleLine size={70} />} 
                                    />
                                </Box>
                            </>
                        ) : (
                            <Flex p="4" gap='4'>
                                <Spinner />
                                <Text>The initial loading time takes 1 to 2 minutes, but once it starts, the loading speeds up.</Text>
                            </Flex>
                        )}

                        <Heading size='sm' mt="4" mb="2">Weekly Attendance Chart</Heading>
                        {/* <LineChart 
                            width={1200} 
                            height={300} 
                            data={data}
                        >
                            <Line type="monotone" dataKey="attendees" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart> */}
                        <Alert status='info'>
                            <AlertIcon />
                            Weekly trends require at least three weeks of data.
                        </Alert>
                    </TabPanel>
                    <TabPanel px='0' py='1'>
                        <Heading size='sm' mt="4">VIPs</Heading>
                        <Box mt='1' gap='4' display='flex' flexDirection={{base: 'column', md: 'row'}}>
                            <StatCard 
                                label="First Timer (This Month)"
                                value={42}
                                change_percentage={3.43}
                                icon={<TiUserAdd size={70} />} 
                            />

                            <StatCard 
                                label="Second Timer (This Month)"
                                value={31}
                                change_percentage={51.43}
                                icon={<BsArrowRepeat size={70} />} 
                            />

                            <StatCard 
                                label="Third Timer (This Month)"
                                value={25}
                                change_percentage={31.48}
                                icon={<GiAchievement size={70} />} 
                            />

                            <StatCard 
                                label="Fourth Timer (This Month)"
                                value={11}
                                change_percentage={-13}
                                icon={<GrAchievement size={70} />} 
                            />
                        </Box>

                        <Heading size='sm' mt="4">Attendees</Heading>
                        <Box mt='1' gap='4' display='flex' flexDirection={{base: 'column', md: 'row'}}>
                            <StatCard 
                                label="Total Attendees (This Month)"
                                value={1440}
                                change_percentage={75.33}
                                icon={<FaChurch size={70} />} 
                            />

                            <StatCard 
                                label="Average Attendees (Monthly)"
                                value={212}
                                change_percentage={13.53}
                                icon={<FaPeopleLine size={70} />} 
                            />
                        </Box>

                        <Heading size='sm' mt="4" mb="2">Monthly Attendance Chart</Heading>
                        <Alert status='info'>
                            <AlertIcon />
                            Monthly trends require at least three months of data.
                        </Alert>
                    </TabPanel>
                    <TabPanel px='0' py='1'>
                        <Alert status='info'>
                            <AlertIcon />
                            Insufficient data to display yearly trends. Add more data to view annual insights.
                        </Alert>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}