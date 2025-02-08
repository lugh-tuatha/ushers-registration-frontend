import '../../reports.css'

import {
    Box,
    Flex,
    Heading,
    Link,
    Select,
    Text
} from "@chakra-ui/react";

import Layout from "../../../../components/layout";
import { SudaysOfYearHttpData } from "../../../../types";
import {useFetchSundaysOfYear, useFilterAttendance} from "../../../../hooks";
import {useState} from "react";
import moment from "moment/moment";
import TextSkeleton from "../../../../components/ui/text-skeleton";

export default function LeadersAttendanceSummary() {
    const currentDate = new Date()
    const previousWeekDate = moment(currentDate).subtract(7, 'days');
    const previousWeekNumber = previousWeekDate.isoWeek();
    const [attendanceType, setAttendanceType] = useState("sunday");
    const [churchHierarchy, setChurchHierarchy] = useState("Primary Leader");
    const [weekNumber, setWeekNumber] = useState(previousWeekNumber);

    const { data: sundaysOfYearData } = useFetchSundaysOfYear()
    const { data, isLoading } = useFilterAttendance(attendanceType, churchHierarchy, weekNumber)

    console.log(attendanceType, churchHierarchy, weekNumber)

    return (
        <Layout>
            <Flex gap='4' alignItems='center' my="2">
                <Select w={{base: '60%', md: "20%"}}
                    value={churchHierarchy}
                    onChange={(event) => setChurchHierarchy(event.target.value)}
                >
                    <option value="Network Leader">Network Leader</option>
                    <option value="Primary Leader">Primary Leader</option>
                    <option value="Secondary Leader">Secondary Leader</option>
                    <option value="Cell Leader">Cell Leader</option>
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

                <Select
                    w={{base: '60%', md: "20%"}}
                    value={weekNumber}
                    onChange={(event) => setWeekNumber(Number(event.target.value))}
                >
                    {sundaysOfYearData?.map((sunday: SudaysOfYearHttpData) => (
                        <option key={sunday.week_no} value={sunday.week_no}>{sunday.date}</option>
                    ))}
                </Select>
            </Flex>


            <Box className="report-container" w={{base: 'full', md: "50%"}}>
                <Box padding="4" display="flex" borderBottom="1.5px solid black" justifyContent="space-between">
                    <Heading size="md" fontWeight="500">Name</Heading>
                    <Heading size="md" fontWeight="500">Time in</Heading>
                </Box>

                <Heading size="xs" className="report-subheading">
                    Primary Leader
                </Heading>

                <Box py="2">
                    {!isLoading && data ? (
                        <>
                            {data?.map((item: any) => (
                                <Box key={item._id} className="report-item">
                                    <Link href="#">{item.attendee.first_name} {item.attendee.last_name}</Link>
                                    <Text>
                                        {
                                            new Date(item.time_in)
                                                .toLocaleString([], {hour: '2-digit', minute: '2-digit', hour12: true}) || "-"
                                        }
                                    </Text>
                                </Box>
                            ))}
                        </>
                    ) : (
                        <TextSkeleton />
                    )}

                </Box>
            </Box>
        </Layout>
    )
}