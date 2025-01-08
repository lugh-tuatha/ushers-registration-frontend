import { useState } from 'react';

import { 
    Box, 
    Button, 
    Container, 
    Heading, 
    Link, 
    ListItem, 
    UnorderedList,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Text,
 } from '@chakra-ui/react'
 
import { FaChevronDown } from 'react-icons/fa6'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const menuDisplay = openMenu ? 'block' : 'none';

    return (
        <>
            <Container maxW='7xl' p='4' display='flex' alignItems='center' justifyContent='space-between'>
                <Heading size="xl" color='blue.600'>
                    <Link href='/'>Project Luke <Text fontSize='1.25rem' color='black'>Ushers Registration</Text></Link>
                </Heading>

                <UnorderedList display={{base: 'none', md: 'flex'}} alignItems='center' gap='4' fontWeight='bold' listStyleType='none'>
                    <ListItem>
                        <Menu>
                            <MenuButton fontWeight="bold" _hover={{textDecoration: "underline"}}>
                                <Flex alignItems='center' gap='2'>
                                    Guest
                                    <FaChevronDown size={15}/>
                                </Flex>
                            </MenuButton>
                            <MenuList py='0'>
                                <MenuItem>
                                    <Link href='/guest/regular' w='full'>
                                        Regular
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/guest/vip' w='full'>
                                        VIPs
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Link href='/check-in'>Check-in</Link>
                    </ListItem>
                    <ListItem>
                        <Menu>
                            <MenuButton fontWeight="bold" _hover={{textDecoration: "underline"}}>
                                <Flex alignItems='center' gap='2'>
                                    Attendance
                                    <FaChevronDown size={15}/>
                                </Flex>
                            </MenuButton>
                            <MenuList py='0'>
                                <MenuItem>
                                    <Link href='/attendance/sunday' w='full'>
                                        Sunday Attendance 
                                    </Link>
                                </MenuItem>
                                <MenuItem>Pepsol Attendance</MenuItem>
                                <MenuItem>
                                    <Link href='/attendance/prayer-night' w='full'>
                                        Prayer Night Attendance 
                                    </Link>
                                </MenuItem>
                                <MenuItem>Mentoring Attendance</MenuItem>
                                <MenuItem>Conference Attendance</MenuItem>
                                <MenuItem>Wild Fire Attendance</MenuItem>
                                <MenuItem>Valenzuela Attendance</MenuItem>
                                <MenuItem>Japan Attendance</MenuItem>
                                <MenuItem>Herbosa Attendance</MenuItem>
                            </MenuList>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Link href='/upcoming-events'>Upcoming Events</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/summary'>Summary</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/reports'>Reports</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/'>Training Process</Link>
                    </ListItem>
                </UnorderedList>

                <Button display={{base: 'none', md: 'block'}}>
                    <Link href='/login'>Login as Admin</Link>
                </Button>

                <Box display={{base: 'block', md: 'none'}}>
                    <RxHamburgerMenu size={32} onClick={toggleMenu}/>
                </Box>
            </Container>

            {/* mobile menu */}
            <Container 
                display={{ base: menuDisplay, md: 'none'}} 
                w='100vw'
                h='100vh'
                p='4'
                bg='white'
                position='absolute' 
                top='0' 
                right='0'
                zIndex='2'
            >
                <Heading size="xl" display='flex' alignItems='center' justifyContent='space-between'>
                    <Link href='/' color='blue.600'>Project Luke <Text fontSize='1.25rem' color='black'>Ushers Registration</Text></Link>

                    <IoMdClose size={34} onClick={toggleMenu}/>
                </Heading>

                <UnorderedList p='0' fontWeight='bold' fontSize='1.25rem' listStyleType='none' ml='0' mt='8' display='flex' flexDirection='column' gap='4'>
                    <ListItem>
                        <Menu>
                            <MenuButton fontWeight="bold" _hover={{textDecoration: "underline"}}>
                                <Flex alignItems='center' gap='2'>
                                    Guest
                                    <FaChevronDown size={15}/>
                                </Flex>
                            </MenuButton>
                            <MenuList py='0'  w='full'>
                                <MenuItem>
                                    <Link href='/guest/regular' w='full'>
                                        Regular
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/guest/vip' w='full'>
                                        VIPs
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Link href='/check-in'>Check-in</Link>
                    </ListItem>
                    <ListItem>
                        <Menu>
                            <MenuButton fontWeight="bold" _hover={{textDecoration: "underline"}}>
                                <Flex alignItems='center' gap='2'>
                                    Attendance
                                    <FaChevronDown size={15}/>
                                </Flex>
                            </MenuButton>
                            <MenuList py='0'>
                                <MenuItem>
                                    <Link href='/attendance/sunday' w='full'>
                                        Sunday Attendance 
                                    </Link>
                                </MenuItem>
                                <MenuItem>Pepsol Attendance</MenuItem>
                                <MenuItem>
                                    <Link href='/attendance/prayer-night' w='full'>
                                        Prayer Night Attendance 
                                    </Link>
                                </MenuItem>
                                <MenuItem>Mentoring Attendance</MenuItem>
                                <MenuItem>Conference Attendance</MenuItem>
                                <MenuItem>Wild Fire Attendance</MenuItem>
                                <MenuItem>Valenzuela Attendance</MenuItem>
                                <MenuItem>Japan Attendance</MenuItem>
                                <MenuItem>Herbosa Attendance</MenuItem>
                            </MenuList>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Link href='/upcoming-events'>Upcoming Events</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/summary'>Summary</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/reports'>Reports</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/'>Training Process</Link>
                    </ListItem>
                </UnorderedList>
            </Container>
            
        </>
    )
}