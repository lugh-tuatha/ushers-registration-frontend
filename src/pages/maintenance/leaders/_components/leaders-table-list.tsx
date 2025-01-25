import { 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
 } from "@chakra-ui/react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useLeaders } from "../../../../hooks";

export default function LeadersTableList() {
    const { data } = useLeaders()
    console.log(data)
    return (
        <TableContainer>
            <Table size='sm'>
                <TableCaption>List of all leaders</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>
                            Type
                        </Th>
                        <Th>
                            Disciples
                        </Th>
                        <Th textAlign='end'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data && data.map((leader: any) => (
                        <Tr key={leader._id}>
                            <Td>{leader.first_name} {leader.last_name}</Td>
                            <Td>{leader.type}</Td>
                            <Td>{leader.desciples_count}</Td>
                            <Td display='flex' gap='2' justifyContent='end'>
                                <FaRegEdit size={20} cursor='pointer'/>
                                <FaRegTrashAlt size={20} color='red' cursor='pointer'/>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
