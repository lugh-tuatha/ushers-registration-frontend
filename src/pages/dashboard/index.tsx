import { useLocation } from "react-router-dom";

import Layout from "../../components/layout";
import BreadCrumb from "../../components/ui/breadcrumb";

import { generateBreadcrumb } from "../../utils";

export default function Dashboard() {
    const location = useLocation();
    const breadcrumbData = generateBreadcrumb(location.pathname)

    return (
        <Layout>
            <BreadCrumb data={breadcrumbData}/>


        </Layout>
    )
}
