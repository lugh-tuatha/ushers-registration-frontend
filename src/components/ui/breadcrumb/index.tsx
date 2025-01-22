import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"

interface BreadCrumbProps {
    data: string[]; 
}

export default function BreadCrumb({ data }: BreadCrumbProps) {
    return (
        <Breadcrumb mb='4'>
            <BreadcrumbItem> 
                <BreadcrumbLink href='/'>Home</BreadcrumbLink> 
            </BreadcrumbItem>
            {data.map((item, index) => (
                <BreadcrumbItem 
                    key={index}
                    isCurrentPage={index === data.length - 1}
                >
                    <BreadcrumbLink href={`/${item}`} textTransform='capitalize'>{item}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}
