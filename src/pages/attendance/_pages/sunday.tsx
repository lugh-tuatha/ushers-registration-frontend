import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
 } from '@chakra-ui/react'

import Layout from '../../../components/layout'
import AttendanceTableList from '../_components/attendance-table-list'

export default function SundayAttendance() {
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

            <Flex justifyContent='space-between' alignItems='center' mb='2'>
                <Heading size="md" mb='2'>Sunday Service Attendance This Sunday (11/10/2024)</Heading>
                <Button colorScheme='blue'>
                    Print
                </Button>
            </Flex>

            <AttendanceTableList attendanceType="sunday" />
        </Layout>
    )
}
