import Layout from '../../components/layout'

import { Button, Card, CardBody, CardHeader, Heading, Input } from '@chakra-ui/react'

export default function AdminLogin() {
    return (
        <Layout>
            <Heading fontWeight='200' fontSize='3xl' textAlign='center'>Log in as Admin</Heading>

            <Card mt='4' maxW='md' mx='auto'>
                <CardHeader pb='0'>
                    <Heading size='md'>Usher</Heading>
                </CardHeader>
                <CardBody>
                    <Input placeholder='Email / Username'/>
                    <Input type='password' placeholder='Password' my='4'/>
                    <Button width='full' colorScheme='blue'>Login</Button>
                </CardBody>
            </Card>
        </Layout>
    )
}
