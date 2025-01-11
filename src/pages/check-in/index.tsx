import { useState } from 'react'
import './check-in.css'
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
    HStack,
    TableContainer,
    Flex,
    Spinner,
} from '@chakra-ui/react'

import { FaQrcode } from "react-icons/fa";

import Layout from '../../components/layout'
import { useAttendees } from '../../hooks';
import { useMutatecheckIn } from '../../hooks/use-attendance';

export default function CheckIn() {
    const [searchTerm, setSearchTerm] = useState("")
    const [search, setSearch] = useState("")
    const [isFocus, setIsFocus] = useState(false)

    const { data, isLoading } = useAttendees(search)
    const { mutate } = useMutatecheckIn()

    const toast = useToast();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter" && searchTerm !== search){
            setSearch(searchTerm)
        }
    }

    const markPresent = (id: string, first_name?: string) => {
        let attendance_type = "sunday"

        if(moment().format('ddd') == "Wed"){
            attendance_type = "prayer-night"
        }
        
        mutate({
            week_no: moment(new Date()).isoWeek(),
            attendee: id,
            time_in: new Date(),
            attendance_type: attendance_type
        }, 
        {
            onSuccess: () => {
                toast({
                    title: 'Presence marked!',
                    description: `Thank you for attending today, ${first_name || id}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            },
            onError: () => {
                toast({
                    title: 'Error!',
                    description: `${first_name} not found. Please check the attendee details.`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            }
        })
    }

    const checkInOnScan = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            const id = event.currentTarget.value
            markPresent(id)
            event.currentTarget.value = ''
        }   
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
                    type='search' 
                    my='4' 
                    w='5%'
                    position='absolute'
                    opacity='0'
                    onKeyDown={checkInOnScan}
                    id='scanner-input'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <Input 
                    placeholder='Enter your name to check in' 
                    type='search' 
                    my='4' 
                    w={{base: '70%', md: '90%'}}
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    onKeyDown={handleKeyDown}
                />

                <label
                    htmlFor='scanner-input'
                    className='scanner-label'
                    style={{
                        border: isFocus ? '2px solid green' : '',
                        color: isFocus ? 'black' : 'white'
                    }}
                >
                    Scanner
                    <FaQrcode />
                </label>
            </HStack>
            <TableContainer>
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
                    {!isLoading && data ? (
                        <>
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
        </Layout>
    )
}