import AddVip from './add-vip';

import { Flex, Heading, TabPanel, Text, Spinner } from '@chakra-ui/react';

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

            {!isLoading ? (
                data?.length > 0 ? (
                    data.map((attendee, index) => (
                        <Text key={attendee._id} fontSize="4xl" fontWeight="200">
                            <span className="order-indicator">
                                # {String(index + 1).padStart(2, "0")}{" "}
                            </span>
                            {attendee.first_name} {attendee.last_name}
                            <span className="invited-by">
                                <b>Invited by:</b> {attendee.invited_by}
                            </span>
                        </Text>
                    ))
                ) : (
                    <Text>No attendees available.</Text>
                )
            ) : (
                <Flex p="4" gap='4'>
                    <Spinner />
                    <Text>The initial loading time takes 1 to 2 minutes, but once it starts, the loading speeds up.</Text>
                </Flex>
            )}
        </TabPanel>
    )
}

