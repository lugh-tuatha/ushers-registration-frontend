import { useLocation } from "react-router-dom";
import './reports.css'

import Layout from "../../components/layout";
import BreadCrumb from "../../components/ui/breadcrumb";
import ReportItem from "./_components/report-item";

import { generateBreadcrumb } from "../../utils";
import { Box, Grid, Heading } from "@chakra-ui/react";

export default function index() {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    return (
        <Layout>
            <BreadCrumb data={breadcrumbData} />

            <Box className="report-category-container">
                <Heading size="md" fontWeight="semibold">Attendance Overview</Heading>

                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(3, 1fr)"}} rowGap="2" columnGap="4" py="2">
                    <ReportItem title="Weekly Attendance Report" href="/reports/weekly-attendance-summary" />
                </Grid>
            </Box>
        </Layout>
    )
}
