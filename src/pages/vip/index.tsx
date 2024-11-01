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
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
} from '@chakra-ui/react'

export default function Vip() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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

                            <Button onClick={onOpen} colorScheme='blue'>New First Timer</Button>
                        </Flex>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Insert New First Timer</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody display='flex' flexDirection='column' gap='2'>
                                    <Input 
                                        name='name' 
                                        placeholder='Name' 
                                    />
                                    <Input 
                                        name='invited-by' 
                                        placeholder='Who Invited You?' 
                                    />
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button variant='ghost'>Add</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                            Mark Ezekiel Baloloy
                            <span className='invited-by'><b>Invited by:</b> Bro. Justin Egonia</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                                Rose Marie Gloria
                            <span className='invited-by'><b>Invited by:</b> Team Maricar</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                                Albert Caro
                            <span className='invited-by'><b>Invited by:</b> Team Jun / Elmer</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 04 </span>
                                Alexa Pineda
                            <span className='invited-by'><b>Invited by:</b> Team Venalyn</span>
                        </Text>
                    </TabPanel>
                    <TabPanel px='0' py='2'>
                        <Heading>Second Timer</Heading>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                                Jericho Bautista
                            <span className='invited-by'><b>Invited by:</b> Bro. Justin Egonia</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                                Ashante Malicad
                            <span className='invited-by'><b>Invited by:</b> Ps. Arven Lucas</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                                Troy Seraspi
                            <span className='invited-by'><b>Invited by:</b> Justin Egonia</span>
                        </Text>
                    </TabPanel>
                    <TabPanel px='0' py='2'>
                        <Heading>Third Timer</Heading>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                                Jhon Clemente
                            <span className='invited-by'><b>Invited by:</b> Aldrin</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 02 </span>
                                Ashante Malicad
                            <span className='invited-by'><b>Invited by:</b> Ps. Arven Lucas</span>
                        </Text>
                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 03 </span>
                                Richilyn Cabaltis
                            <span className='invited-by'><b>Invited by:</b> Charissa</span>
                        </Text>
                    </TabPanel>
                    <TabPanel px='0' py='2'>
                        <Heading>Fourth Timer</Heading>

                        <Text fontSize="4xl" fontWeight='200'>
                            <span className='order-indicator'># 01 </span>
                                Trina Balares
                            <span className='invited-by'><b>Invited by:</b> Team Ps. Daisy</span>
                        </Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout>
    )
}
