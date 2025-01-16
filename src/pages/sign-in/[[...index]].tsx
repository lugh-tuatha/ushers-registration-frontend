import { SignIn } from '@clerk/clerk-react'

import { Flex } from '@chakra-ui/react'
import Layout from '../../components/layout'

export default function index() {
    return (
        <Layout>
            <Flex justifyContent='center'>
                <SignIn />
            </Flex>
        </Layout>
    )
}