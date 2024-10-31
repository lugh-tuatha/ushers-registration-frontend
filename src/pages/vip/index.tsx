import React from 'react'
import './vip.css'

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
    Text,
    Flex,
    Button
} from '@chakra-ui/react'

export default function Vip() {
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
                    <Tab>Fourth Timer</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='2'>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Heading>First Timer</Heading>

                            <Button colorScheme="blue">New VIP +</Button>
                        </Flex>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Bro. Justin Egonia</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Arven Lucas</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Alip Aspiras</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 04 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Alip Aspiras</span>
                        </Text>
                    </TabPanel>
                    <TabPanel px='0' py='2'>
                    <Flex justifyContent="space-between" alignItems="center">
                            <Heading>Second Timer</Heading>

                            <Button colorScheme="blue">New VIP +</Button>
                        </Flex>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                            Asher Gabriella P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Bro. Justin Egonia</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Arven Lucas</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Alip Aspiras</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 04 </span>
                            Ace Gabriel P. Pasiliao
                            <span className='invited-by'><b>Invited by:</b> Ps. Alip Aspiras</span>
                        </Text>
                    </TabPanel>
                    <TabPanel px='0' py='2'>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
