import React, { useState } from 'react'

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
    Text,
    MenuItem,
    Link,
} from '@chakra-ui/react'

import { FaFilter } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useAttendees, useMutateDeleteAttendee } from '../../../hooks';
import { deleteAttendee } from '../../../services';

export default function AttendeesListTable() {
    const [editMode, setEditMode] = useState(false)

    const { data, error, isLoading } = useAttendees()
    
    const { mutate: deleteAttendeeMutation } = useMutateDeleteAttendee()

    const handleDelete = (id: string) => {
        deleteAttendeeMutation(id)
    }

    return (
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
                            <span>Assigned Leader</span>
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
                        </Th>
                        <Th textAlign='end'>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {!isLoading && data ? (
                    <>
                        {data?.map((attendee: any) => (
                            <Tr key={attendee._id}>
                                <Td cursor='pointer'>
                                    <Link href='/attendee'>
                                        {attendee.first_name} {attendee.last_name}
                                    </Link>
                                </Td>
                                <Td>{attendee.age}</Td>
                                <Td>{attendee.status}</Td>
                                <Td>{attendee.address}</Td>
                                <Td>{attendee.church_roles}</Td>
                                <Td>{attendee.church_heirarchy}</Td>
                                <Td>{attendee.assigned_leader}</Td>
                                <Td display='flex' justifyContent='end' gap='2'>
                                    <FaRegEdit onClick={() => setEditMode(true)} size={20} cursor='pointer'/>
                                    <FaRegTrashAlt onClick={() => handleDelete(attendee._id)} size={20} color='red' cursor='pointer'/>
                                </Td>
                            </Tr>
                        ))}
                    </>
                ) : (
                    <Tr>
                        <Td colSpan={7} textAlign="center">
                            Loading...
                        </Td>
                    </Tr>
                )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
