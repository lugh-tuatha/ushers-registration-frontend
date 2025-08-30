import { Flex, Spinner, Text } from "@chakra-ui/react"

export default function Loader() {
    return (
        <Flex p="4" gap='4' justifyContent='center'>
            <Spinner />
            <Text>The initial loading time takes 1 to 2 minutes, but once it starts, the loading speeds up.</Text>
        </Flex>
    )
}