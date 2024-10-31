import './App.css'

import Layout from './components/layout'

import { 
    Heading,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Button,
    Text,
    Box,
    Image,
    HStack,
    Flex,
    Link
 } from '@chakra-ui/react'
function App() {
    return (
        <Layout>
            <HStack gap="4">
                <Card size="md" mt="4" width="50%">
                    <CardBody>
                        <Heading size="md">VIPs</Heading>

                        <Flex justifyContent="space-between" gap="4" my="4">
                            <Text opacity=".50" textAlign="justify">We're thrilled to have you here and celebrate your presence with us! Whether it's your first, second, third, or fourth time attending, you are already part of our family. We hope you find community, inspiration, and a warm welcome in every encounter.</Text>

                            <Image src='/assets/vip-banner.jpg' alt="VIPs Banner" width="250px" aspectRatio="16/9"/>
                        </Flex>
                        
                        <Button colorScheme='blue'>
                            <Link href='/vip'>View all VIP's</Link>
                        </Button>
                    </CardBody>
                </Card>

                <Card size="md" mt="4" width="50%">
                    <CardBody>
                        <Heading size="md">Regular Attendees</Heading>

                        <Flex justifyContent="space-between" gap="4" my="4">
                            <Text opacity=".50" textAlign="justify">To all our faithful attendees, thank you for making this community a part of your life. Your presence brings warmth, unity, and strength to our church family. We are blessed to have you with us week after week, growing together in faith, service, and fellowship.</Text>

                            <Image src='/assets/regular-attendees-banner.jpg' alt="Regulare Attendees Banner" width="250px" aspectRatio="16/9"/>
                        </Flex>
                        
                        <Button colorScheme='blue'>
                            <Link href="/attendance">Regular Attendees</Link>
                        </Button>
                    </CardBody>
                </Card>
            </HStack>

            <HStack gap="12" mt="8" alignItems="start">
                <Box>
                    <Heading size="md">This Week's Attendees</Heading>

                    <Text my="4" textAlign="justify" opacity=".50">Join us in welcoming everyone who attended this week! Each service brings together new faces and familiar friends, creating a vibrant and growing community. Take a moment to see who joined us and celebrate the people who make our gatherings so special.</Text>

                    <Button colorScheme='blue'>
                        <Link href="/attendees">View Attendees This Week</Link>
                    </Button>

                    <Text mt="2" textDecoration="underline" cursor="pointer">Watch this week's Live</Text>
                </Box>

                <Image src='/assets/sundays-are-for-worship.jpg' alt='Sundays are for Worship' width="400px"/>
            </HStack>

            <HStack gap="12" mt="8" alignItems="start">
                <Image src='/assets/welcome-to-church.jpg' alt='Welcome to Church' width="450px"/>

                <Box>
                    <Heading size="md   ">Convert VIPs to Regular Attendees</Heading>

                    <Text my="4" opacity=".50">
                        Officially transition VIPs to regular attendees. With just one click, you can update their status and welcome them into our regular attendee community, celebrating their ongoing commitment and presence in our church family.
                    </Text>

                    <Button colorScheme='blue'>Convert VIPs to Regular Attendees</Button>
                </Box>
            </HStack>

            <HStack gap="4" mt="8">
                <Box textAlign="center" width="50%">
                    <Heading size="md">Meet Our Primary Leaders</Heading>
                    <Text my="2" opacity=".50">Get to know our dedicated primary leaders, the men and women who guide and inspire our church family. Click on any leader to view their cell members and learn more about their attendance.</Text>
                    <Button colorScheme='blue'>
                        <Link href='/summary'>View Primary Leaders</Link>
                    </Button>
                </Box>

                <Box textAlign="center" width="50%">
                    <Heading size="md">Reports</Heading>
                    <Text my="2" opacity=".50">Gain insights into our church community with detailed attendance reports. Track overall attendees, monitor average weekly attendance, and explore monthly and yearly trends. </Text>
                    <Button colorScheme='blue'>
                        <Link href='/reports'>Explore Reports</Link>
                    </Button>
                </Box>
            </HStack>
        </Layout>
    )
}

export default App
