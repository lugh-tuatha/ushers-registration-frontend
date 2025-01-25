import { useLocation } from "react-router-dom";
import './index.css'

import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";

import Layout from "../../../../components/layout";
import BreadCrumb from "../../../../components/ui/breadcrumb";

import { generateBreadcrumb } from "../../../../utils";
import { useFetchSundaysOfYear, useWeeklyAttendanceSummary } from "../../../../hooks";

import { IoMdPeople } from "react-icons/io";
import { AttendeeStats, SudaysOfYearHttpData } from "../../../../types";
import moment from "moment";
import { useState } from "react";
import TextSkeleton from "../../../../components/ui/text-skeleton";

export default function WeeklyAttendaceSummary() {
    const currentDate = new Date()
    const previousWeekDate = moment(currentDate).subtract(7, 'days');
    const previousWeekNumber = previousWeekDate.isoWeek();
    const [weekNumber, setWeekNumber] = useState(previousWeekNumber)
    const [attendanceType, setAttendanceType] = useState("sunday")

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    const { data: sundaysOfYearData } = useFetchSundaysOfYear()
    const { data, isLoading } = useWeeklyAttendanceSummary(weekNumber, attendanceType)

    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex gap='4' alignItems='center' my="2">
                <Select
                    w={{base: '60%', md: "20%"}}
                    value={weekNumber}
                    onChange={(event) => setWeekNumber(Number(event.target.value))}
                >
                    {sundaysOfYearData?.map((sunday: SudaysOfYearHttpData) => (
                        <option key={sunday.week_no} value={sunday.week_no}>{sunday.date}</option>
                    ))}
                </Select>
                
                <Select 
                    w={{base: '40%', md: "20%"}}
                    value={attendanceType}
                    onChange={(event) => setAttendanceType(event.target.value)}
                >
                    <option value="sunday">Sunday</option>
                    <option value="pepsol">Pepsol</option>
                    <option value="prayer-night">Prayer Night</option>
                    <option value="valenzuela">Valenzuela</option>
                </Select>
            </Flex>

            <Box className="report-container" w={{base: 'full', md: "50%"}}>
                <Box padding="4" display="flex" borderBottom="1.5px solid black" justifyContent="space-between">
                    <Heading size="md" fontWeight="500">Member Status</Heading>
                    <Heading size="md" fontWeight="500">Attendees</Heading>
                </Box>

                <Box>
                    <Box py="2">
                        <Heading size="xs" className="report-subheading">
                            Attendees
                        </Heading>

                        {!isLoading ? (
                            <>
                                {data?.attendees?.map((attendee: AttendeeStats) => (
                                    <Box key={attendee.member_status} className="report-item">
                                        <Text>{attendee.member_status}</Text>
                                        <Text display="flex" alignItems="center" gap="1">
                                            {attendee.count}
                                            <IoMdPeople size={18}/>
                                        </Text>
                                    </Box>
                                ))}
                            </>
                        ) : (
                            <TextSkeleton />
                        )}
                        
                        <Box className="report-item" borderBottom="none" fontWeight="700">
                            <Text>Total</Text>
                            <Text display="flex" alignItems="center" gap="1">
                                {data?.total_regulars}
                                <IoMdPeople size={18}/>
                            </Text>
                        </Box>

                        <Heading size="xs" className="report-subheading">
                            VIPs
                        </Heading>

                        {!isLoading ? (
                            <>
                                {data?.vips?.map((vip: AttendeeStats) => (
                                    <Box key={vip.member_status} className="report-item">
                                        <Text>{vip.member_status}</Text>
                                        <Text display="flex" alignItems="center" gap="1">
                                            {vip.count}
                                            <IoMdPeople size={18}/>
                                        </Text>
                                    </Box>
                                ))}
                            </>
                        ) : (
                            <TextSkeleton />
                        )}
                        
                        <Box className="report-item" fontWeight="700">
                            <Text>Total VIPs</Text>
                            <Text display="flex" alignItems="center" gap="1">
                                {data?.total_vips}
                                <IoMdPeople size={18}/>
                            </Text>
                        </Box>

                        <Box className="report-item" fontWeight="bold" fontSize="1rem">
                            <Text>Total Attendees</Text>
                            <Text display="flex" alignItems="center" gap="1">
                                {data?.total_attendees}
                                <IoMdPeople size={18}/>
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}