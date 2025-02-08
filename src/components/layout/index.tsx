import React from 'react'

import Header from './header'

import { Container } from '@chakra-ui/react'
import BreadCrumb from "../ui/breadcrumb";
import {useLocation} from "react-router-dom";
import {generateBreadcrumb} from "../../utils";

export default function Layout(props: { children: React.ReactNode }) {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    return (
        <>
            <Header />
                <Container maxW='7xl' p='4'>
                    <BreadCrumb data={breadcrumbData}/>

                    {props.children}
                </Container>
            {/* <Footer /> */}
        </>

    )
}
