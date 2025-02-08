import './reports.css'

import Layout from "../../components/layout";
import ReportItem from "./_components/report-item";

import { Box, Grid, Heading } from "@chakra-ui/react";

export default function Reports() {

    return (
        <Layout>
            <Box className="report-category-container">
                <Heading size="md" fontWeight="semibold">Attendance Overview</Heading>

                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(3, 1fr)"}} rowGap="2" columnGap="4" py="2">
                    <ReportItem title="Weekly Attendance Summary" href="/reports/weekly-attendance-summary" />
                    <ReportItem title="Leaders Attendance Summary" href="/reports/leaders-attendance-summary" />
                        <ReportItem title="Leader Member List" href="/reports/leader-member-list" />
                </Grid>
            </Box>
        </Layout>
    )
}
