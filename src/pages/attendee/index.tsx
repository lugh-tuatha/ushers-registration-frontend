import React from 'react'
import Layout from '../../components/layout'

import { 
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react'

import { IoLocationOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { LuBadgeAlert } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { FaSitemap } from "react-icons/fa";

export default function Attendee() {
    
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Attendees</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Image src='https://bit.ly/dan-abramov' alt="Ace Gabriel P. Pasiliao" width='15rem' rounded='4'/>
            <Text fontWeight="semibold" fontSize="xl" my='1'>Ace Gabriel P. Pasiliao</Text>
            <UnorderedList listStyleType='none' ml='0'>
                <ListItem display='flex' alignItems='center' gap='1'>
                    <IoIosCalendar />
                    <span>20 years old</span>
                </ListItem>
                <ListItem display='flex' alignItems='center' gap='1'>
                    <LuBadgeAlert />
                    <span>Single</span>
                </ListItem>
                <ListItem display='flex' alignItems='center' gap='1'>
                    <IoLocationOutline />
                    <span>#619 Gastambide st. Sampaloc Manila</span>
                </ListItem>
                <ListItem display='flex' alignItems='center' gap='1'>
                    <FiUserCheck />
                    <span>Youth</span>
                </ListItem>
                <ListItem display='flex' alignItems='center' gap='1'>
                    <FaSitemap />
                    <span>Cell Member</span>
                </ListItem>
            </UnorderedList>
        </Layout>
    )
}

