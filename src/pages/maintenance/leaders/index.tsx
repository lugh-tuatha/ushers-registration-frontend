import { useLocation } from "react-router-dom";
import { Button, Flex, Heading } from "@chakra-ui/react";

import Layout from "../../../components/layout";
import BreadCrumb from "../../../components/ui/breadcrumb";
import LeadersTableList from "./_components/leaders-table-list";

import { generateBreadcrumb } from "../../../utils";

export default function Leaders() {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)
    
    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>

            <Flex justifyContent='space-between' alignItems='center' mb='4'>
                <Heading size="md" mb='2'>Leaders</Heading>
                <Button colorScheme="blue">New Leaders +</Button>
            </Flex>
            
            <LeadersTableList />
        </Layout>
    )
}