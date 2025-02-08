import Layout from '../../../../components/layout';

import {
    Flex,
    Heading,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import AddAttendeeModal from './_components/add-attendee-modal';
import { useRegularDiscipleCount } from '../../../../stores';

export default function Regular() {
    const regulars = useRegularDiscipleCount((state) => state.regulars)

    return (
        <Layout>
            <Flex justifyContent='space-between' alignItems='center' mb='4'>
                <Heading size='md'>Regular Disciples ({regulars})</Heading>
                <AddAttendeeModal />
            </Flex>
            
            <AttendeesListTable />
        </Layout>
    )
}