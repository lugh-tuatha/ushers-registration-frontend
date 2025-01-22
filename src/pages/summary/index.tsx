import Layout from '../../components/layout'
import { useLocation } from 'react-router-dom';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import AttendeesListTable from '../guest/_page/regular/_components/attendees-list-table';
import BreadCrumb from '../../components/ui/breadcrumb'
import { generateBreadcrumb } from '../../utils';

export default function Summary() {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Tabs>
                <TabList>
                    <Tab>Primary Leader</Tab>
                    <Tab>Secondary Leader</Tab>
                    <Tab>Cell Member</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='1'>
                        <AttendeesListTable />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
