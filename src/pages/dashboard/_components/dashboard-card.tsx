import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { IoIosPeople } from "react-icons/io";

interface DashboardCardProps {
    title: string,
    value?: number,
    description: string,
}

export default function DashboardCard({ title, value, description }: DashboardCardProps) {
    return (
        <Card>
            <CardHeader display='flex' alignItems="center" px="4" py="2" gap='4'>
                <IoIosPeople size={30}/>
                <Text fontWeight="500">{title}</Text>
            </CardHeader>
            <CardBody px="4" pt="0" pb="4">
                <Text fontWeight="500" fontSize="3xl">{value || "-"}</Text>
                <Text fontSize="sm">{description}</Text>
            </CardBody>
        </Card>
    )
}
