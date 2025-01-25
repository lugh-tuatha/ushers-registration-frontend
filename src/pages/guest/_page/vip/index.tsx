import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './vip.css'

import { Tabs, TabList, TabPanels, Tab } from '@chakra-ui/react'

import Layout from '../../../../components/layout'
import TabContent from './_components/tab-content'

import { useAttendanceByTypeAndStatus } from '../../../../hooks'
import { generateBreadcrumb } from '../../../../utils'
import BreadCrumb from '../../../../components/ui/breadcrumb'

export default function Vip() {
    const [tabIndex, setTabIndex] = useState(0)

    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    const memberStatuses = ["first-timer", "second-timer", "third-timer", "fourth-timer"]
    const { data, isLoading } = useAttendanceByTypeAndStatus('sunday', 4, memberStatuses[tabIndex])
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData} />

            <Tabs onChange={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>First Timer</Tab>
                    <Tab>Second Timer</Tab>
                    <Tab>Third Timer</Tab>
                    <Tab>Fourth Timer</Tab>
                </TabList>

                <TabPanels>
                    <TabContent
                        title="First Timer"
                        data={data}
                        isLoading={isLoading}
                    />
                    <TabContent
                        title="Second Timer"
                        data={data}
                        isLoading={isLoading}
                    />
                    <TabContent
                        title="Third Timer"
                        data={data}
                        isLoading={isLoading}
                    />
                    <TabContent
                        title="Fourth Timer"
                        data={data}
                        isLoading={isLoading}
                    />
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
