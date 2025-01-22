import './header.css'

import { Container, ListItem, Link, UnorderedList, Box } from "@chakra-ui/react";
import { useState } from "react";
 
import { FaChevronDown } from 'react-icons/fa6'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
export default function MobileMenu({ menu }: any) {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const menuDisplay = openMenu ? 'block' : 'none';

    return (
        <Box>
            <Box display={{base: 'block', md: 'none'}}>
                {openMenu 
                    ? <IoMdClose size={34} onClick={toggleMenu}/> 
                    : <RxHamburgerMenu size={32} onClick={toggleMenu}/>
                }
            </Box>

            <Container
                display={{ base: menuDisplay, md: 'none'}} 
                w='100vw'
                h='100vh'
                px='4   '
                bg='white'
                position='fixed' 
                top='5.5rem' 
                right='0'
                zIndex='2'
                overflowY='auto'
            >
                <UnorderedList p='0' fontWeight='bold' fontSize='1.25rem' listStyleType='none' ml='0' mt='2' display='flex' flexDirection='column' gap='4'>
                    {menu.map((item: any) => {
                        const hasSubMenu = item.sub_menu;

                        return (
                            <ListItem className="mobile__submenu">
                                <Link href={item.href} display='flex' justifyContent='space-between' alignItems='center' gap='2'>
                                    {item.name}
                                    {hasSubMenu && <FaChevronDown size={15}/>}
                                </Link>
                                {hasSubMenu && (
                                    <UnorderedList className="submenu__item">
                                        {item.sub_menu?.map((item: any) => (
                                            <ListItem pt='2'>
                                                <Link href={item.href} _hover={{textDecoration: "underline"}}>
                                                    {item.name}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </UnorderedList>
                                )}
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Container>
        </Box>
    )
}
