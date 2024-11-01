import React from 'react'
import Layout from '../../../components/layout'
import { useParams } from 'react-router-dom';

import { useAttendee } from '../../../hooks';

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Image,
    Link,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react'

import AttendanceHeatmap from '../_components/attendance-heatmap';

export default function Profile() {
    const params = useParams()

    console.log(params.slug)

    const { data, error, isLoading } = useAttendee(params.slug)

    console.log(data)

    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/regular'>Regular</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>
                        {data?.first_name} {data?.last_name}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>


            {!isLoading && data ? (
                <>  
                    <Flex gap='5' h='15rem'>
                        {!isLoading && data.image !== undefined ? (
                            <Image src={data.image} alt="attendee's profile picture" h='full' rounded='4'/>
                        ) : (
                            <Image src='/assets/attendee/default.jpg' alt="attendee's profile picture" h='full' rounded='4'/>
                        )}

                        <AttendanceHeatmap />
                    </Flex>
                    
                    <Link href='/assets/attendee-qr/justin.egonia.png' download>
                        <Button colorScheme='blue' w='15rem' mt='2'>Download Profile QR</Button>
                    </Link>
                    
                    <Text fontWeight="semibold" fontSize="xl" my='1'>
                        {data?.first_name} {data?.last_name}
                    </Text>

                    <UnorderedList listStyleType='none' ml='0' width='15rem'>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Network Leader: </span>
                                {data?.primary_leader}
                            </Text>
                            
                        </ListItem>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Age: </span>
                                {data?.age} Years Old
                            </Text>
                            
                        </ListItem>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Status: </span>
                                {data?.status}
                            </Text>
                            
                        </ListItem>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Address: </span>
                                {data?.address}
                            </Text>
                            
                        </ListItem>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Network: </span>
                                {data?.network}
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                <span className='font-medium'>Church Hierarchy: </span>
                                {data?.church_hierarchy}
                            </Text>
                        </ListItem>
                    </UnorderedList>
                </>
            ) : (
                <p>Loading..</p>
            )}
            
        </Layout>
    )
}

