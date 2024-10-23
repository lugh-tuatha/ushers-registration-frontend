import './App.css'

import Layout from './components/layout'

import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Flex,
    Card, CardHeader, CardBody, CardFooter, HStack, Text, Heading, Box
} from '@chakra-ui/react'

import { FaPeopleLine } from "react-icons/fa6";
import { MdAccessibilityNew } from "react-icons/md";
import { FaChurch } from "react-icons/fa";

function App() {
    return (
        <Layout>
            <HStack gap='4'>
                <Card size='sm' cursor='pointer'>
                    <CardBody display='flex' alignItems="center" gap='8'>
                        <Stat>
                            <StatLabel>Total Attendees (Overall)</StatLabel>
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
                            <StatLabel>Average Attendees (weekly)</StatLabel>
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
        </Layout>
    )
}

export default App
