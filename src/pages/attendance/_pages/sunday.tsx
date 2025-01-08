import { useState } from 'react'

import { useFetchSundaysOfYear } from '../../../hooks/use-calendar'

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
    Select,
 } from '@chakra-ui/react'

import Layout from '../../../components/layout'
import AttendanceTableList from '../_components/attendance-table-list'
import { SudaysOfYearHttpData } from '../../../types/calendar'
import moment from 'moment'

export default function SundayAttendance() {
    const currentDate = new Date()
    const previousWeekNumber = moment(currentDate.getDate() - 7).isoWeek()
    const [weekNumber, setWeekNumber] = useState(previousWeekNumber)
    
    const { data: sundaysOfYearData } = useFetchSundaysOfYear()
    
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Attendance</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Sunday Attendance</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyContent='space-between' alignItems='center'>
                <Heading size="md" mb='2'>Sunday Service Attendance</Heading>
                <Button colorScheme='blue'>
                    Print
                </Button>
            </Flex>

            <Select my='2' w='25%'
                value={weekNumber}
                onChange={(event) => setWeekNumber(Number(event.target.value))}
            >
                {sundaysOfYearData?.map((sunday: SudaysOfYearHttpData) => (
                    <option key={sunday.week_no} value={sunday.week_no}>{sunday.date}</option>
                ))}
            </Select>

            <AttendanceTableList attendanceType="sunday" week={weekNumber} />
        </Layout>
    )
}