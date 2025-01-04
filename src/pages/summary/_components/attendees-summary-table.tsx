import { 
    Table, 
    TableCaption, 
    TableContainer, 
    Tbody, 
    Td, 
    Th, 
    Thead,
    Tr
} from "@chakra-ui/react";

export default function AttendeesSummaryTable() {
    return (
        <TableContainer>
            <Table>
                <TableCaption>List of Primary Leaders</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Age</Th>
                        <Th>Network Leader</Th>
                        <Th>Church Process</Th>
                        <Th>Network</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
