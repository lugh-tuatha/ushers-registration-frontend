import { Flex, Heading } from "@chakra-ui/react";

export default function AuthCheck() {
    return (
        <Flex p='4' h='100vh' alignItems='center' justifyContent='center'>
            <Heading size="md">Checking if you're authenticated 🔒</Heading>
        </Flex>
    )
}
