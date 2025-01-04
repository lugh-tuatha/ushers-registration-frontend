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
} from '@chakra-ui/react'

import { FaFilter } from 'react-icons/fa'

import { useSundayAttendanceByType } from '../../../hooks/use-attendance'

interface Props {
    attendanceType: string
}

export default function AttendanceTableList( {attendanceType}: Props ) {
    const { data } = useSundayAttendanceByType(attendanceType)

    console.log(data)

    return (
        <TableContainer>
            <Table size='sm'>
                <TableCaption>List of all attendees this sunday 10/23/2024</TableCaption>
                <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th display='flex' alignItems='center' justifyContent='space-between'>
                                <span>Primary Leader</span>
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
                            <Th>Member Status</Th>
                            <Th textAlign='end'>Arrival Time</Th>
                        </Tr>
                </Thead>
                <Tbody>
                    {data?.map((attendee, index) => (
                        <Tr key={index}>
                            <Td cursor='pointer'>
                                {/* <Link href={`/profile/${data._id}`} > */}
                                {attendee.attendee.first_name} {attendee.attendee.last_name}
                                {/* </Link> */}
                            </Td>
                            <Td>
                                {attendee.attendee.primary_leader}
                            </Td>
                            <Td>{attendee.attendee.church_process}</Td>
                            <Td>{attendee.attendee.member_status}</Td>
                            <Td textAlign='end'>
                                {
                                    new Date(attendee.time_in)
                                        .toLocaleString([], {hour: '2-digit', minute: '2-digit', hour12: true})
                                }
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
