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
import Loader from "../../../components/ui/loader";

interface Props {
    data: any
    week: number
}

export default function AttendanceTableList( {data, week}: Props ) {

    return (
        <TableContainer>
            <Table size='sm'>
                <TableCaption>List of all attendees this sunday week {week}</TableCaption>
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
                    {data ? (
                        <>
                            {data?.map((attendee: any, index: number) => (
                                <Tr key={index}>
                                    <Td cursor='pointer'>
                                        {/* <Link href={`/profile/${data._id}`} > */}
                                        {attendee.attendee?.first_name || "-"} {attendee.attendee?.last_name || ""}
                                        {/* </Link> */}
                                    </Td>
                                    <Td>
                                        {attendee.attendee?.primary_leader || "-"}
                                    </Td>
                                    <Td>{attendee.attendee?.church_process || "-"}</Td>
                                    <Td>{attendee.attendee?.member_status || "-"}</Td>
                                    <Td textAlign='end'>
                                        {
                                            new Date(attendee.time_in)
                                                .toLocaleString([], {hour: '2-digit', minute: '2-digit', hour12: true}) || "-"
                                        }
                                    </Td>
                                </Tr>
                            ))}
                        </>
                    ) : (
                        <Tr>
                            <Td colSpan={7} textAlign="center">
                                <Loader />
                            </Td>
                        </Tr>
                    )}

                </Tbody>
            </Table>
        </TableContainer>
    )
}
