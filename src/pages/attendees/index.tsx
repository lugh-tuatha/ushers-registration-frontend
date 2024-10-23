import React from 'react'

import Layout from '../../components/layout'

import {
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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
    HStack,
    Button,
} from '@chakra-ui/react'
import { FaFilter } from "react-icons/fa";


export default function Attendees() {
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
                <Button colorScheme='blue'>New (first timer) +</Button>
            </HStack>

            <TableContainer>
                <Table size='sm'>
                    <TableCaption>List of all Attendees</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Age</Th>
                            <Th>Status</Th>
                            <Th>Address</Th>
                            <Th>Church Roles</Th>
                            <Th>Cell Status</Th>
                            <Th display='flex' alignItems='center' justifyContent='space-between'>
                                <Menu>
                                    <MenuButton>
                                        <FaFilter />
                                    </MenuButton>
                                    <MenuList>
                                        <Text px='3'>Filter</Text>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                    </MenuList>
                                </Menu>
                                <span>Assigned Leader</span>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Ace Gabriel</Td>
                            <Td>20</Td>
                            <Td>Single</Td>
                            <Td>#619 Gastambide st. Sampaloc Manila</Td>
                            <Td>Youth</Td>
                            <Td>Cell Member</Td>
                            <Td textAlign='end'>Bro. Justin Egonia</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Layout>
    )
}
