import Layout from '../../../components/layout'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Heading,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import AddAttendeeModal from './_components/add-attendee-modal';
import { useAttendees } from '../../../hooks';

export default function Regular() {
    const { data, isLoading } = useAttendees()
    
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Regular</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

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