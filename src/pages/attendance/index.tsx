import { useState } from 'react'

import moment from 'moment'
import { useLocation, useParams } from 'react-router-dom'

import { 
    Button,
    Flex,
    Heading,
    Select,
 } from '@chakra-ui/react'

import Layout from '../../components/layout'
import AttendanceTableList from './_components/attendance-table-list'
import BreadCrumb from '../../components/ui/breadcrumb'

import { SudaysOfYearHttpData } from '../../types' 
import { useAttendanceByType, useFetchSundaysOfYear } from '../../hooks'
import { generateBreadcrumb } from '../../utils'

export default function SundayAttendance() {
    const params = useParams()
    const currentDate = new Date()
    const previousWeekNumber = moment(currentDate.getDate() - 7).isoWeek()
    const [weekNumber, setWeekNumber] = useState(previousWeekNumber)

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)
     
    const { data: sundaysOfYearData } = useFetchSundaysOfYear()
    const { data } = useAttendanceByType(params.type, weekNumber)
    
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex justifyContent='space-between' alignItems='center'>
                {data ? (
                    <Heading size="md" mb='2' textTransform="capitalize">{params.type} Attendance ({data.length})</Heading>
                ): ''}
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

            <AttendanceTableList data={data} week={weekNumber} />
        </Layout>
    )
}