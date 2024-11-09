import Layout from '../../components/layout'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react'
import AttendeesListTable from '../regular/_components/attendees-list-table'

export default function Summary() {

    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Summary</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Tabs>
                <TabList>
                    <Tab>Primary Leader</Tab>
                    <Tab>Secondary Leader</Tab>
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
