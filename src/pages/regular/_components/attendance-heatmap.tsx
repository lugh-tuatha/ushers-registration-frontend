import React from 'react'

import { 
    Box,
    Heading,
    VStack,
    HStack,
    Flex,
    Text,
    UnorderedList,
    ListItem,
    Tooltip,
} from '@chakra-ui/react'

import { useCalendar } from '../../../hooks/use-calendar'

export default function AttendanceHeatmap() {
    const { data: calendarData, isLoading: isCalendarLoading } = useCalendar(2024)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    console.log(calendarData?.[months[1]]);

    return (
        <Box>
            <Heading size='md'>Sunday Attendance</Heading>

            <HStack alignItems='start' gap='4' mt='2'>
                <Flex alignItems='start' gap='2' px='2' pt='1' pb='4' border='1px' borderColor='gray.500'>
                    {months.map((month, index) => (
                        <Box key={index}>
                            <Text fontSize='sm' opacity='.75'>{month}</Text>
                            <Flex flexWrap='wrap' flexDirection='column' gap='1' mt='1' h='4.75rem'>
                                {!isCalendarLoading && calendarData ? (
                                    calendarData?.[month].map((date: any, index) => (
                                        <Tooltip label={`Week No. ${date.week_no} ${date.date}`}>
                                            <Box key={index} border='1px' borderColor='blue.600' h='1rem' w='1rem' />
                                        </Tooltip>
                                    ))
                                ) : (
                                    <>
                                        Loading...
                                    </>
                                )}
                            </Flex>
                        </Box>
                    ))}
                </Flex>

                <UnorderedList listStyleType='none' ml='0'>
                    <ListItem bg='blue.500' px='6' py='2' rounded='4'>2024</ListItem>
                    <ListItem px='6' py='2'>2023</ListItem>
                </UnorderedList>
            </HStack>
        </Box>
    )
}
