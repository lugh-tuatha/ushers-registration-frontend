import React from 'react'

import { Box, Button, Container, Heading, Link, ListItem, UnorderedList,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    textDecoration,
    Flex,
    Text,
 } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa6'

export default function Header() {
    return (
        <Box px=''>
            <Container maxW='7xl' p='4' display='flex' alignItems='center' justifyContent='space-between'>
                <Heading size="xl" color='blue.600'>
                    <Link href='/'>Project Luke <Text fontSize='1.25rem' color='black'>Ushers Registration</Text></Link>
                </Heading>

                <UnorderedList display='flex' alignItems='center' gap='4' fontWeight='bold' listStyleType='none'>
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
                                    <Link href='/regular' w='full'>
                                        Regular
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/vip' w='full'>
                                        VIPs
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </ListItem>
                    <ListItem>
                        <Link href='/attendance'>Search</Link>
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
                                    <Link href='/sunday-attendance' w='full'>
                                        Sunday Attendance 
                                        
                                    </Link>
                                </MenuItem>
                                <MenuItem>Pepsol Attendance</MenuItem>
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
                </UnorderedList>

                <Button>
                    <Link href='/login'>Login as Admin</Link>
                </Button>
            </Container>
        </Box>
    )
}