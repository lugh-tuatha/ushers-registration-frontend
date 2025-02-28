import { Skeleton, Stack } from '@chakra-ui/react'

export default function TextSkeleton() {
  return (
    <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
    </Stack>
  )
}
