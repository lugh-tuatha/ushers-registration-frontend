import React from 'react'

import { Box, Button, Container, Heading, Link, ListItem, UnorderedList } from '@chakra-ui/react'

export default function Header() {
    return (
        <Box px=''>
            <Container maxW='7xl' p='4' display='flex' justifyContent='space-between'>
                <Heading>Usher</Heading>

                <UnorderedList display='flex' alignItems='center' gap='4' fontWeight='bold' listStyleType='none'>
                    <ListItem>
                        <Link href='/'>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/attendees'>Attendees</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/special-mention'>Special Mention</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/attendance'>Attendance</Link>
                    </ListItem>
                </UnorderedList>

                <Button>Admin Dashboard</Button>
            </Container>
        </Box>
    )
}