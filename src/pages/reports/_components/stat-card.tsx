import React from 'react'

import { 
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Card, 
    CardBody, 
    HStack, 
 } from '@chakra-ui/react'
 
import { FaPeopleLine } from 'react-icons/fa6'

type StatCardType = { 
    label: String,
    value: number,
    change_percentage: number,
    icon: JSX.Element
}

export default function StatCard({label, value, change_percentage, icon} : StatCardType) {
  return (
    <Card size='sm' cursor='pointer'>
        <CardBody display='flex' alignItems="center" gap='8'>
            <Stat>
                <StatLabel color="blue.600">{label}</StatLabel>
                <StatNumber>{value}</StatNumber>
                <StatHelpText>
                    <StatArrow type={change_percentage > 0 ? 'increase' : 'decrease'} />
                    {change_percentage} %
                </StatHelpText>
            </Stat>
            {icon}
        </CardBody>
    </Card>
  )
}
