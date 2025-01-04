import { useState } from 'react'
import moment from 'moment'

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
    Button,
    Input,
    useToast,
    HStack
} from '@chakra-ui/react'

import { FaQrcode } from "react-icons/fa";

import Layout from '../../components/layout'
import { useAttendees } from '../../hooks';
import { useMutatecheckIn } from '../../hooks/use-attendance';

export default function CheckIn() {
    const [searchTerm, setSearchTerm] = useState("")
    const [search, setSearch] = useState("")

    const { data, error, isLoading } = useAttendees(search)
    const { mutate, isSuccess, isPending } = useMutatecheckIn()

    const toast = useToast();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(search)
        if(event.key === "Enter" && searchTerm !== search){
            setSearch(searchTerm)
        }
    }

    const markPresent = (id: string, first_name: string) => {
        let attendance_type = "sunday"

        if(moment().format('ddd') == "Wed"){
            attendance_type = "prayer-night"
        }
        
        mutate({
            week_no: moment(new Date()).week(),
            attendee: id,
            time_in: new Date(),
            attendance_type: attendance_type
        }, 
        {
            onSuccess: () => {
                toast({
                    title: 'Presence marked!',
                    description: `Thank you for attending today, ${first_name}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            },
        })
    }

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

            <HStack>
                <Input 
                    placeholder='Enter your name to check in' type='search' my='4' w='90%'
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    onKeyDown={handleKeyDown}
                />

                <Button colorScheme='blue' w='10%' display='flex' alignItems="center" gap='2'>
                    Scan QR
                    <FaQrcode />
                </Button>
            </HStack>
            
            <Table size='sm'>
                <TableCaption>List of all Attendees</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Church Hierarchy</Th>
                        <Th>Member Status</Th>
                        <Th textAlign='end'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((attendee: any) => (
                        <Tr key={attendee._id}>
                            <Td>{attendee.first_name} {attendee.last_name}</Td>
                            <Td>{attendee.network}</Td>
                            <Td>{attendee.member_status}</Td>
                            <Td textAlign='end'>
                                <Button colorScheme='blue' size='sm' 
                                    onClick={() => markPresent(attendee._id, attendee.first_name)}
                                >
                                    Present
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Layout>
    )
}