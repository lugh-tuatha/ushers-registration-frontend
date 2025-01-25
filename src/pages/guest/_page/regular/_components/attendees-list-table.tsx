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
    Flex,
    Spinner,
} from '@chakra-ui/react'

import { FaFilter } from "react-icons/fa";

import EditAttendeeModal from './edit-attendee-modal';
import DeleteConfirmationModal from './delete-confirmation-modal';
import { useAttendees } from '../../../../../hooks';
import { useRegularDiscipleCount } from '../../../../../stores';

export default function AttendeesListTable() {
    const updateRegularsCount = useRegularDiscipleCount((state) => state.updateRegularsCount)
        
    const { data } = useAttendees()

    if (data) {
        updateRegularsCount(data.length)
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
                    {data ? (
                        <>
                            {data?.map((attendee: any) => (
                                <Tr key={attendee._id}>
                                    <Td cursor='pointer'>
                                        <Link href={`/guest/regular/${attendee._id}`}>
                                            {attendee.first_name} {attendee.last_name}
                                        </Link>
                                    </Td>
                                    <Td>{attendee.age || "-"}</Td>
                                    <Td>{attendee.status || "-"}</Td>
                                    <Td>{attendee.member_status || "-"}</Td>
                                    <Td>{attendee.church_hierarchy || "-"}</Td>    
                                    <Td>
                                        {attendee.primary_leader?.length > 20 ?
                                            `${attendee.primary_leader.substring(0, 20)}...` : attendee.primary_leader || "-"
                                        }
                                    </Td>
                                    <Td>{attendee.church_process || "-"}</Td>
                                    <Td>{attendee.network || "-"}</Td>
                                    <Td display='flex' justifyContent='end' gap='2'>
                                        <EditAttendeeModal attendeeId={attendee._id} />
                                        <DeleteConfirmationModal id={attendee._id}/>
                                    </Td>
                                </Tr>
                            ))}
                        </>
                    ) : (
                        <Tr>
                            <Td colSpan={7} textAlign="center">
                                <Flex p="4" gap='4' justifyContent='center'>
                                    <Spinner />
                                    <Text>The initial loading time takes 1 to 2 minutes, but once it starts, the loading speeds up.</Text>
                                </Flex>
                            </Td>
                        </Tr>
                    )}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
        
    )
}
