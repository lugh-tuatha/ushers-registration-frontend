import {
    Box,
} from '@chakra-ui/react'

import Layout from '../../components/layout'
import EventCard from './_components/event-card.tsx';

export default function UpcomingEvents() {
    return (
        <Layout>
            <Box display='flex' flexDirection={{base: 'column', md: 'row'}} gap='4'>
                <EventCard 
                    cover='/assets/anniversary.png'
                    heading='Saving Family, Transforming Cities'
                    sub_heading='Each One, Bring One'
                    description='deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliquid?s'
                    date='Nov 17, 2024'
                />

                <EventCard 
                    cover='/assets/encounter-god-retreat.jpg'
                    heading='Freedom, Focus, Fire'
                    sub_heading='Each One, Bring One'
                    description='deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliquid?s'
                    date='Nov 29, 2024 - Nov 30, 2024'
                />

                <EventCard 
                    cover='/assets/christmas-party.jpg'
                    heading='LHMI Christmas Party'
                    sub_heading='Each One, Bring One'
                    description='deserunt consequatur veniam magni molestiae itaque voluptatem ipsum voluptate, neque sed ratione aliqu id?s'
                    date='Dec 8, 2024'
                />
            </Box>
        </Layout>
    )
}