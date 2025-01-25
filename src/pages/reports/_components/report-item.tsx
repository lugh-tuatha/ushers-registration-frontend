import { Link, Text } from '@chakra-ui/react'
import { CiStar } from 'react-icons/ci'

interface ReportItemProps {
    title: string,
    href: string
}

export default function ReportItem({ title, href }: ReportItemProps) {
    return (
        <Link href={href} display="flex" justifyContent="space-between" cursor="pointer" borderBottom="1px" p="2">
            <Text>{title}</Text>
            <CiStar size={24}/>
        </Link>
    )
}
