import { 
    Box,
    Flex,
    Text,
    Tooltip,
} from '@chakra-ui/react'

import { useCalendar } from '../../../../../hooks';

export default function AttendanceHeatmap() {
    const { data: calendarData, isLoading: isCalendarLoading } = useCalendar(2024)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    console.log(calendarData?.[months[1]]);

    return (
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
    )
}
    