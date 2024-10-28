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
} from '@chakra-ui/react'

import AttendeesListTable from './_components/attendees-list-table';
import { useMutateAttendees } from '../../hooks';

export default function Attendees() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [status, setStatus] = useState("")
    const [address, setAddress] = useState("")
    const [churchRoles, setChurchRoles] = useState("")
    const [churchHeirarchy, setChurchHeirarchy] = useState("")
    const [assignedLeader, setAssignedLeader] = useState("")

    const { 
        mutate: createAttendeeMutation, 
        isSuccess: isCreateAttendeeSuccess, 
        isPending: isCreatePostPending
    } = useMutateAttendees()

    const handleSubmit = () => {
        createAttendeeMutation({
            first_name: firstName,
            last_name: lastName,
            age: parseInt(age),
            status: status,
            address: address,
            church_roles: churchRoles,
            church_heirarchy: churchHeirarchy,
            assigned_leader: assignedLeader,
            is_leader: false
        })
    }

    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Attendees</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <HStack mb='4'>
                <Button colorScheme='blue' onClick={onOpen}>New (first timer) +</Button>
            </HStack>
            
            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Insert New Attendees</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' gap='8'>
                        <VStack width='50%' gap='2'>
                            <Text textAlign='right'>Personal Information</Text>
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
                        </VStack>
                        <VStack width='50%' gap='2'>
                            <Text textAlign='right'>Church Role Information</Text>
                            <Select 
                                name='church-roles' 
                                placeholder='Church Roles'
                                value={churchRoles} 
                                onChange={(event) => {
                                    setChurchRoles(event.target.value)
                                }}
                            >
                                <option value='Young'>Youth</option>
                                <option value='Young Pro'>Young Pro</option>
                                <option value='Mother'>Mother</option>
                                <option value='Father'>Father</option>
                            </Select>
                            <Select 
                                name='church-heirarchy' 
                                placeholder='Church Heirarchy'
                                value={churchHeirarchy} 
                                onChange={(event) => {
                                    setChurchHeirarchy(event.target.value)
                                }} 
                            >
                                <option value='Cell Member'>Cell Member</option>
                                <option value='Cell Leader'>Cell Leader</option>
                                <option value='Primary Leader'>Primary Leader</option>
                                <option value='Elder'>Elder</option>
                                <option value='Pastor'>Pastor</option>
                            </Select>
                            <Select 
                                name='church-heirarchy' 
                                placeholder='Assigned Leader'
                                value={assignedLeader} 
                                onChange={(event) => {
                                    setAssignedLeader(event.target.value)
                                }}
                            >
                                <option value='Ps. Alip Aspiras'>Ps. Alip Aspiras</option>
                                <option value='Ps. Arven Lucas'>Ps. Arven Lucas</option>
                                <option value='Bro. Justin Egonia'>Bro. Justin Egonia</option>
                            </Select>
                        </VStack>
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
