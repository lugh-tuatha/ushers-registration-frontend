import React, { useState } from 'react'
import Layout from '../../components/layout'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    HStack,
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
    Select,
    Textarea,
    VStack,
    FormControl,
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import { useMutateAttendees } from '../../hooks';

export default function Regular() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [status, setStatus] = useState("")
    const [address, setAddress] = useState("")
    const [network, setNetwork] = useState("")
    const [churchHierarchy, setChurchHierarchy] = useState("")
    const [primaryLeader, setPrimaryLeader] = useState("")

    const { 
        mutate: createAttendeeMutation, 
        isSuccess: isCreateAttendeeSuccess, 
        isPending: isCreatePostPending
    } = useMutateAttendees()

    
    const resetForm = () => {
        setFirstName("")
        setLastName("");
        setAge("");
        setStatus("");
        setAddress("");
        setNetwork("");
        setChurchHierarchy("");
        setPrimaryLeader("");
    }

    const handleSubmit = () => {
        createAttendeeMutation({
            first_name: firstName,
            last_name: lastName,
            age: parseInt(age),
            status: status,
            address: address,
            network: network,
            church_hierarchy: churchHierarchy,
            primary_leader: primaryLeader,
            is_leader: false
        })
        onClose()
        resetForm()
    }

    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Regular</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <HStack mb='4'>
                <Button colorScheme='blue' onClick={onOpen}>New Account +</Button>
            </HStack>
            
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Insert New Attendees</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' gap='8'>
                        <FormControl display='flex' flexDirection='column' gap='2' width='50%'>
                            <Text>Personal Information</Text>
                            <Input 
                                name='first-name' 
                                placeholder='First Name' 
                                value={firstName}
                                onChange={(event) => {
                                    setFirstName(event.target.value)
                                }}
                            />
                            <Input 
                                name='last-name' 
                                placeholder='Last Name' 
                                value={lastName}
                                onChange={(event) => {
                                    setLastName(event.target.value)
                                }}
                            />
                            <Input 
                                type='number'
                                name='age' 
                                placeholder='Age' 
                                value={age}
                                onChange={(event) => {
                                    setAge(event.target.value)
                                }}
                            />
                            <Select 
                                name='status' 
                                placeholder='Status' 
                                value={status} 
                                onChange={(event) => {
                                    setStatus(event.target.value)
                                }}
                            >
                                <option value='Single'>Single</option>
                                <option value='Married'>Married</option>
                                <option value='Divorced'>Divorced</option>
                                <option value='Widowed'>Widowed</option>
                            </Select>
                            <Textarea 
                                name='address' 
                                placeholder='Address' 
                                value={address} 
                                onChange={(event) => {
                                    setAddress(event.target.value)
                                }}
                            />
                        </FormControl>
                        <FormControl display='flex' flexDirection='column' width='50%' gap='2'>
                            <Text textAlign='right'>Church Role Information</Text>
                            <Select 
                                name='primary-leader' 
                                placeholder='Primary Leader'
                                value={primaryLeader} 
                                onChange={(event) => {
                                    setPrimaryLeader(event.target.value)
                                }}
                            >
                                <option value='Ps. Alip Aspiras'>
                                    Ps. Alip Aspiras
                                </option>
                                <option value='Ps. Arven Lucas'>
                                    Ps. Arven Lucas
                                </option>
                                <option value='Bro. Justin Egonia'>
                                    Bro. Justin Egonia
                                </option>
                                <option value='Aldrin Cabatbat'>
                                    Aldrin Cabatbat
                                </option>
                                <option value='Jasper Neil Mariano'>
                                    Jasper Neil Mariano
                                </option>
                                <option value='Rappha Torres'>
                                    Rappha Torres
                                </option>
                                <option value='Leandro Bernal'>
                                    Leandro Bernal
                                </option>
                                <option value='Jun Rebusora/Elmer Navales'>
                                    Jun Rebusora/Elmer Navales
                                </option>
                                <option value='Harold Mendoza/Warren Dumayac'>
                                    Harold Mendoza/Warren Dumayac
                                </option>
                                <option value='Jexcel Tenorio/Robert Ritual'>
                                    Jexcel Tenorio/Robert Ritual
                                </option>
                                <option value='Ps. Issa Aspiras'>
                                    Ps. Issa Aspiras
                                </option>
                                <option value='Ps. Daisy Marie Lucas'>
                                    Ps. Daisy Marie Lucas
                                </option>
                                <option value='Mariecar Navales'>
                                    Mariecar Navales
                                </option>
                                <option value='Arch Cawaling'>
                                    Arch Cawaling
                                </option>
                                <option value='Angielyn Cabanting'>
                                    Angielyn Cabanting
                                </option>
                                <option value='Gina Garcia'>
                                    Gina Garcia
                                </option>
                                <option value='Graciella Faith Aspiras'>
                                    Graciella Faith Aspiras
                                </option>
                                <option value='Karissa Marie Torres'>
                                    Karissa Marie Torres
                                </option>
                                <option value='Susan Gubatana'>
                                    Susan Gubatana
                                </option>
                                <option value='Janine Egonia/Mysa Valderama'>
                                Janine Egonia/Mysa Valderama
                                </option>
                                <option value='Merlyn Cabatbat/Janiene Dumayac'>
                                    Merlyn Cabatbat/Janiene Dumayac
                                </option>
                                <option value='Venalyn Martinez/Shane Malicdem/Jhona Mae Sabio'>
                                    Venalyn Martinez/Shane Malicdem/Jhona Mae Sabio
                                </option>
                                
                            </Select>
                            <Select 
                                name='network' 
                                placeholder='Net'
                                value={network} 
                                onChange={(event) => {
                                    setNetwork(event.target.value)
                                }}
                            >
                                <option value='Young'>Youth</option>
                                <option value='Young Pro'>Young Pro</option>
                                <option value='Mother'>Mother</option>
                                <option value='Father'>Father</option>
                                <option value='Husband'>Husband</option>
                                <option value='Wife'>Wife</option>
                            </Select>
                            <Select 
                                name='church-hierarchy' 
                                placeholder='Church Hierarchy'
                                value={churchHierarchy} 
                                onChange={(event) => {
                                    setChurchHierarchy(event.target.value)
                                }} 
                            >
                                <option value='Cell Member'>Cell Member</option>
                                <option value='Cell Leader'>Cell Leader</option>
                                <option value='Primary Leader'>Primary Leader</option>
                                <option value='Elder'>Elder</option>
                                <option value='Pastor'>Pastor</option>
                            </Select>
                            <Select 
                                name='church-process' 
                                placeholder='Church Process'
                                // value={assignedLeader} 
                                // onChange={(event) => {
                                //     setAssignedLeader(event.target.value)
                                // }}
                            >
                                <option value='Start Up Lesson'>Start Up Lesson</option>
                                <option value='Pre-Encounter'>Pre-Encounter</option>
                                <option value='Post-Encounter'>Post-Encounter</option>
                                <option value='SOL 1'>SOL 1</option>
                                <option value='Undercover'>Undercover</option>
                                <option value='SOL 2'>SOL 2</option>
                                <option value='SOL 3'>SOL 3</option>
                                <option value='Pastoral Ministry'>Pastoral Ministry</option>
                            </Select>
                            <Select 
                                name='member-status' 
                                placeholder='Member Status'
                                // value={assignedLeader} 
                                // onChange={(event) => {
                                //     setAssignedLeader(event.target.value)
                                // }}
                            >
                                <option value='Regular Attendees'>Regular Attendees</option>
                                <option value='Regular Disciple'>Regular Disciple</option>
                                <option value='Regular Startup'>Regular Startup</option>
                                <option value='Back to Life'>Back to Life</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
            <AttendeesListTable />
        </Layout>
    )
}
