import React from 'react'

import Header from './header'
import Footer from './footer'
import Sidenav from './sidenav'

import { Box, Container, Flex } from '@chakra-ui/react'

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Header />
                <Container maxW='7xl' p='4'>
                    {props.children}
                </Container>
            {/* <Footer /> */}
        </>

    )
}
