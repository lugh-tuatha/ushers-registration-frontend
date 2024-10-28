import React from 'react'
import './special-mention.css'

import Layout from '../../components/layout'

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Text
} from '@chakra-ui/react'

export default function SpecialMention() {
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Special Mention</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Tabs>
                <TabList>
                    <Tab>First Timer</Tab>
                    <Tab>Second Timer</Tab>
                    <Tab>Third Timer</Tab>
                    <Tab>Forth Timer</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='1'>
                        <Heading>First Timer</Heading>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                            Ace Gabriel P. Pasiliao
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                            Ace Gabriel P. Pasiliao
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                            Ace Gabriel P. Pasiliao
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 04 </span>
                            Ace Gabriel P. Pasiliao
                        </Text>
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
