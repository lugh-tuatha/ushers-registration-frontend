import {
    Card,
    CardBody,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react'

interface EventCardProps {
    cover: string
    heading: string,
    sub_heading: string,
    description: string,
    date: string
}

export default function EventCard( { cover, heading, sub_heading, description, date  }: EventCardProps ) {
    return (
        <Card>
            <CardBody>
                <Image src={cover} alt='church anniversary' h='10rem' w='full'/>

                <Heading size='md' mt='2'>{heading}</Heading>
                <Heading size='sm' opacity='.50' my='2'>{sub_heading}</Heading>
                <Text>{description}</Text>
                <Text opacity='.5' mt="2">{date}</Text>
            </CardBody>
        </Card>
    )
}
