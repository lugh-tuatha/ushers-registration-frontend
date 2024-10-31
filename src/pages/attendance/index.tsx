import React, { useState } from 'react'

import Layout from '../../components/layout'
import { useAttendees } from '../../hooks';

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Input,
} from '@chakra-ui/react'

export default function Attendance() {
    const [search, setSearch] = useState("")

    const { data, error, isLoading } = useAttendees()

    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Attendance</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading textAlign='center'>Welcome back 👋🏻</Heading>
            <Text textAlign='center'>Are you a regular attendee, part of Back to Life, or a VIP? Find your name here and click 'Present' to mark yourself as present.</Text>

            <Input 
                placeholder='Enter your name to check in' type='search' my='4'
                onChange={(e) => setSearch(e.target.value)}

            />
            <Table size='sm'>
                <TableCaption>List of all Attendees</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Church Hierarchy</Th>
                        <Th>Attendance Status</Th>
                        <Th textAlign='end'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((attendee: any) => (
                        <Tr key={attendee._id}>
                            <Td>{attendee.first_name}</Td>
                            <Td>{attendee.network}</Td>
                            <Td>Regular</Td>
                            <Td textAlign='end'>
                                <Button colorScheme='blue' size='sm'>Present</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Layout>
    )
}