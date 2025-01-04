import { useState } from 'react'

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

export default function SundayAttendance() {
    const [weekNumber, setWeekNumber] = useState(NaN)
    
    console.log(weekNumber)

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
                <Heading size="md" mb='2'>Sunday Service Attendance This Sunday (11/10/2024)</Heading>
                <Button colorScheme='blue'>
                    Print
                </Button>
            </Flex>

            <Select my='2' w='25%'
                value={weekNumber}
                onChange={(event) => setWeekNumber(Number(event.target.value))}
            >
                <option value="44">Week 44, Nov 3, 2024</option>
                <option value="45">Week 45, Last Sunday</option>
                <option value="46">Week 46, This Sunday</option>
            </Select>

            <AttendanceTableList attendanceType="sunday" />
        </Layout>
    )
}
