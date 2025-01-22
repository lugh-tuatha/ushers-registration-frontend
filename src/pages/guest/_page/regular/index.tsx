import Layout from '../../../../components/layout';
import { useLocation } from 'react-router-dom';

import {
    Flex,
    Heading,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import AddAttendeeModal from './_components/add-attendee-modal';
import BreadCrumb from '../../../../components/ui/breadcrumb';
import { useAttendees } from '../../../../hooks';
import { generateBreadcrumb } from '../../../../utils';

export default function Regular() {
    const { data, isLoading } = useAttendees()

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)
    
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex justifyContent='space-between' alignItems='center' mb='4'>
                {!isLoading && data ? (
                    <Heading size='md'>Regular Desciples ({data.length})</Heading>
                ) : <p>Loading</p>}
                <AddAttendeeModal />
            </Flex>
            
            <AttendeesListTable data={data} />
        </Layout>
    )
}