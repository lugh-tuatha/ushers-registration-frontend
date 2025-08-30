import AddVip from './add-vip';

import { Flex, Heading, TabPanel, Text, Box } from '@chakra-ui/react';
import Loader from "../../../../../components/ui/loader";

interface Props {
    title: string;
    data: any[];
    isLoading: boolean;
}

export default function TabContent({title, data, isLoading} : Props) {
    return (
        <TabPanel px='0' py='2'>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading>{title}</Heading>
                <AddVip />
            </Flex>
            <Flex opacity=".45">
                <Box w="10%">No.</Box>
                <Box w="45%">Full Name</Box>
                <Box w="45%">Invited by</Box>
            </Flex>

            {!isLoading ? (
                data?.length > 0 ? (
                    data.map((attendee, index) => (
                        <Flex alignItems="center">
                            <Box className="order-indicator" w="10%">
                                # {String(index + 1).padStart(2, "0")}{" "}
                            </Box>
                            <Text key={attendee._id} fontSize="3xl" fontWeight="200" w="45%">
                                {attendee.attendee.first_name} {attendee.attendee.last_name}
                            </Text>
                            <Text w="45%" fontSize='2xl'>
                                <span className="invited-by">Invited by:</span> {attendee.attendee.invited_by}
                            </Text>
                        </Flex>
                    ))
                ) : (
                    <Text>No attendees available.</Text>
                )
            ) : (
                <Loader />
            )}
        </TabPanel>
    )
}

