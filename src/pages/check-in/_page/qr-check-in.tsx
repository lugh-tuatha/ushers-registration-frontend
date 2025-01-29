import moment from "moment"
import { useParams } from "react-router-dom"
import { Button, Flex, Text } from "@chakra-ui/react"

import Layout from "../../../components/layout"

import { useMutatecheckIn } from "../../../hooks"

export default function QRCheckIn() {
    const params = useParams()
    
    const { mutate, isError, isSuccess } = useMutatecheckIn()
    
    const markPresent = () => {
        if (!params.id) {
            console.error('No attendee ID provided.');
            return;
        }

        let attendance_type = 'sunday'

        if(moment().format('ddd') == "Wed"){
            attendance_type = "prayer-night"
        }

        mutate({
            week_no: moment(new Date()).isoWeek(),
            attendee: params.id,
            time_in: new Date(),
            attendance_type: attendance_type
        })
    }

    return (
        <Layout>
            <Flex alignItems='center' flexDirection='column'>
                <Text>Attendee ID: {params.id}</Text>
                <Button 
                    onClick={() => markPresent()}
                    colorScheme="blue"
                    mt='4'
                    mx='auto'
                >
                    Marked Present
                </Button>
                {isError && <Text color='red'>Error marking attendance! Please check the attendee details.</Text>}
                {isSuccess && <Text color='green'>Presence Marked! Thank you for attending today.</Text>}
            </Flex>
        </Layout>
    )
}
