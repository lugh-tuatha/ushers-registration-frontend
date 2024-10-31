import React from 'react'
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
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    HStack, 
    Text, 
    Heading, 
    Box
} from '@chakra-ui/react'

import { FaPeopleLine } from "react-icons/fa6";
import { MdAccessibilityNew } from "react-icons/md";
import { FaChurch } from "react-icons/fa";

export default function Reports() {
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Reports</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            
            <Tabs>
                <TabList>
                    <Tab>Weekly</Tab>
                    <Tab>Monthly</Tab>
                    <Tab>Yearly</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0' py='1'>
                        <HStack mt="4" gap='4'>
                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>Total Attendees (This Week)</StatLabel>
                                        <StatNumber>440</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='increase' />
                                            23.36%
                                        </StatHelpText>
                                    </Stat>

                                    <FaChurch size={70} />
                                </CardBody>
                            </Card>

                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>Average Attendees (Weekly)</StatLabel>
                                        <StatNumber>240</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='increase' />
                                            23.36%
                                        </StatHelpText>
                                    </Stat>

                                    <FaPeopleLine size={70} />
                                </CardBody>
                            </Card>

                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>First Timer (This Week)</StatLabel>
                                        <StatNumber>6</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='decrease' />
                                            - 23.36%
                                        </StatHelpText>
                                    </Stat>

                                    <MdAccessibilityNew size={70} />
                                </CardBody>
                            </Card>
                        </HStack>
                    </TabPanel>
                    <TabPanel px='0' py='1'>
                        <HStack mt="4" gap='4'>
                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>Total Attendees (This Month)</StatLabel>
                                        <StatNumber>440</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='increase' />
                                            12.36%
                                        </StatHelpText>
                                    </Stat>

                                    <FaChurch size={70} />
                                </CardBody>
                            </Card>

                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>Average Attendees (Monthly)</StatLabel>
                                        <StatNumber>240</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='increase' />
                                            39.36%
                                        </StatHelpText>
                                    </Stat>

                                    <FaPeopleLine size={70} />
                                </CardBody>
                            </Card>

                            <Card size='sm' cursor='pointer'>
                                <CardBody display='flex' alignItems="center" gap='8'>
                                    <Stat>
                                        <StatLabel>First Timer (This Month)</StatLabel>
                                        <StatNumber>6</StatNumber>
                                        <StatHelpText>
                                            <StatArrow type='decrease' />
                                            - 23.36%
                                        </StatHelpText>
                                    </Stat>

                                    <MdAccessibilityNew size={70} />
                                </CardBody>
                            </Card>
                        </HStack>
                    </TabPanel>
                    <TabPanel px='0' py='1'>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}