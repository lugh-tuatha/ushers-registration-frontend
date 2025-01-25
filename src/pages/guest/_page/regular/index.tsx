import Layout from '../../../../components/layout';
import { useLocation } from 'react-router-dom';

import {
    Flex,
    Heading,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import AddAttendeeModal from './_components/add-attendee-modal';
import BreadCrumb from '../../../../components/ui/breadcrumb';
import { generateBreadcrumb } from '../../../../utils';
import { useRegularDiscipleCount } from '../../../../stores';

export default function Regular() {
    const regulars = useRegularDiscipleCount((state) => state.regulars)

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)
    
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex justifyContent='space-between' alignItems='center' mb='4'>
                <Heading size='md'>Regular Disciples ({regulars})</Heading>
                <AddAttendeeModal />
            </Flex>
            
            <AttendeesListTable />
        </Layout>
    )
}