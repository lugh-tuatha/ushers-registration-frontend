import React from 'react'
import Layout from '../../components/layout'

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Card,
    CardBody,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react'

export default function UpcomingEvents() {
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Upcoming Events</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex gap='4'>
                <Card>
                    <CardBody>
                        <Image src='/assets/anniversary.png' alt='church anniversary' height='10rem'/>

                        <Heading size='md' mt='2'>Saving Family, Transforming Cities</Heading>
                        <Heading size='sm' opacity='.50' my='2'>Each One, Bring One</Heading>
                        <Text>deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliquid?s</Text>
                        <Text opacity='.5' mt="2">Nov 17, 2024</Text>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Image src='/assets/encounter-god-retreat.jpg' alt='event thumb' height='10rem'/>

                        <Heading size='md' mt='2'>Encounter God Retreat</Heading>
                        <Heading size='sm' opacity='.50' my='2'>Freedom, Focus, Fire</Heading>
                        <Text>deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliquid?s</Text>
                        <Text opacity='.5' mt="2">Nov 29, 2024 - Nov 30, 2024</Text>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Image src='/assets/christmas-party.jpg' alt='event thumb' height='10rem' width="full"/>

                        <Heading size='md' mt='2'>LHMI Christmas Party</Heading>
                        <Heading size='sm' opacity='.50' my='2'>Each One, Bring One</Heading>
                        <Text>deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliquid?s</Text>
                        <Text opacity='.5' mt="2">Dec 8, 2024</Text>
                    </CardBody>
                </Card>
            </Flex>
            
        </Layout>
    )
}
