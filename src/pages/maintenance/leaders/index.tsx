import Layout from "../../../components/layout";
import LeadersTableList from "./_components/leaders-table-list";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Heading } from "@chakra-ui/react";

export default function Leaders() {
    return (
        <Layout>
            <Breadcrumb mb='4'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Maintenance</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Leaders</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyContent='space-between' alignItems='center' mb='4'>
                <Heading size="md" mb='2'>Leaders</Heading>
                <Button colorScheme="blue">New Leaders +</Button>
            </Flex>
            
            <LeadersTableList />
        </Layout>
    )
}
