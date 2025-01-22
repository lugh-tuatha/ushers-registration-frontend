import { 
    Button, 
    Container, 
    Heading, 
    Link, 
    UnorderedList,
    Text,
    Box,
 } from '@chakra-ui/react'
 import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import { Menus } from '../../../assets/data/menus';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
    return (
        <>
            <Container maxW='7xl' p='4' display='flex' alignItems='center' justifyContent='space-between'>
                <Heading size="xl" color='blue.600'>
                    <Link href='/'>Project Luke <Text fontSize='1.25rem' color='black'>Ushers Registration</Text></Link>
                </Heading>

                <UnorderedList display={{base: 'none', md: 'flex'}} alignItems='center' gap='4' fontWeight='bold' listStyleType='none'>
                    {Menus.map((menu) => (
                        <DesktopMenu key={menu.name} menu={menu} />   
                    ))}
                </UnorderedList>

                <SignedOut>
                    <Button colorScheme='blue'>
                        <Link href='/sign-in'>Sign In</Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                
                <Box display={{base: 'block', md: 'none'}}>
                    <MobileMenu menu={Menus}/>
                </Box>
            </Container>
        </>
    )
}