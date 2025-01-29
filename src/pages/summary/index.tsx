import {useState} from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Layout from '../../components/layout'
import LeadersListTable from "./_components/leaders-list-table.tsx";

import { useLeadersByType } from "../../hooks";

export default function Summary() {
    const [tabIndex, setTabIndex] = useState(0);

    const tabNames = ["primary-leader", "secondary-leader", "cell-leader"];

    const { data } = useLeadersByType(tabNames[tabIndex])

    const handleTabsChange = (index: number) => {
        setTabIndex(index)
    }

    return (
        <Layout>
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>Primary Leader</Tab>
                    <Tab>Secondary Leader</Tab>
                    <Tab>Cell Member</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='1'>
                        <LeadersListTable data={data} />
                    </TabPanel>
                    <TabPanel>
                        <LeadersListTable data={data} />
                    </TabPanel>
                    <TabPanel>
                        <LeadersListTable data={data} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
