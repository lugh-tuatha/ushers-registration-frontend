import React from 'react'

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
import { FaFilter } from 'react-icons/fa'

export default function SundayAttendanceTableList() {
    return (
        <TableContainer>
            <Table size='sm'>
                <TableCaption>List of all Regular Attendees</TableCaption>
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
                    <Tr>
                        <Td cursor='pointer'>
                            {/* <Link href={`/profile/${data._id}`} > */}
                                Mark Ezekiel Baloloy
                            {/* </Link> */}
                        </Td>
                        <Td>Bro. Justin</Td>
                        <Td>Startup Lesson</Td>
                        <Td>Regular Disciple</Td>
                        <Td textAlign='end'>
                            9:02 AM
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
