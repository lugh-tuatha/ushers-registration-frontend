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

import { FaFilter, FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import { useAttendees, useMutateDeleteAttendee } from '../../../hooks';
import EditAttendeeModal from './edit-attendee-modal';

export default function AttendeesListTable() {
    const { data, error, isLoading } = useAttendees()
    const { mutate: deleteAttendeeMutation } = useMutateDeleteAttendee()

    const handleDelete = (id: string) => {
        deleteAttendeeMutation(id)
    }

    return (
        <>
            <TableContainer>
                <Table size='sm'>
                    <TableCaption>List of all Regular Attendees</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Age</Th>
                            <Th>Status</Th>
                            <Th>Member Status</Th>
                            <Th>Cell Hierarchy</Th>
                            <Th display='flex' alignItems='center' justifyContent='space-between'>
                                <span>Network Leader</span>
                                <Menu>
                                    <MenuButton>
                                        <FaFilter />
                                    </MenuButton>
                                    <MenuList>
                                        <Text px='3'>Filter</Text>
                                        <MenuItem>Bro. Justin</MenuItem>
                                        <MenuItem>Ps. Alev</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Th>
                            <Th>Church Process</Th>
                            <Th>Network</Th>
                            <Th textAlign='end'>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {!isLoading && data ? (
                        <>
                            {data?.map((attendee: any) => (
                                <Tr key={attendee._id}>
                                    <Td cursor='pointer'>
                                        <Link href={`/regular/${attendee._id}`}>
                                            {attendee.first_name} {attendee.last_name}
                                        </Link>
                                    </Td>
                                    <Td>{attendee.age}</Td>
                                    <Td>{attendee.status}</Td>
                                    <Td>{attendee.member_status}</Td>
                                    <Td>{attendee.church_hierarchy}</Td>    
                                    <Td>
                                        {attendee.primary_leader.length > 20 ?
                                            `${attendee.primary_leader.substring(0, 20)}...` : attendee.primary_leader
                                        }
                                        {/* {attendee.primary_leader} */}
                                    </Td>
                                    <Td>{attendee.church_process}</Td>
                                    <Td>{attendee.network}</Td>
                                    <Td display='flex' justifyContent='end' gap='2'>
                                        <EditAttendeeModal attendeeId={attendee._id} />
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
        </>
        
    )
}
