import { useParams } from "react-router-dom";

import Layout from "../../../../components/layout";

export default function LeaderDetails() {
    const params = useParams();

    console.log(params.leader_id)
    return (
        <Layout>
            <>as</>
        </Layout>
    )
}