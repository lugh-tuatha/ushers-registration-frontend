import './header.css'

import { Box, Link, ListItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

export default function DesktopMenu({ menu }: any) {

    const hasSubMenu = menu.sub_menu
    return (
        <ListItem className="menu">
            <Link href={menu.href} display='flex' alignItems='center' gap='2'>
                {menu.name}
                {hasSubMenu && (<FaChevronDown size={15}/>)}
            </Link>
            {hasSubMenu && (
                <Box className='menu__item'>
                    {menu.sub_menu?.map((sub_menu: any, index: any) => (
                        <Link key={index} href={sub_menu.href} bg='white' px='4' py='1'>
                            {sub_menu.name}
                        </Link>
                    ))}
                </Box>
            )}
        </ListItem>
    )       
}