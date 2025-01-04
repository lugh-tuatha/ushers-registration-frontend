import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Select,
} from '@chakra-ui/react'
import { useCreateAttendee } from '../../../hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateNewAttendeeBody } from '../../../types'
import { ATTENDEES_BY_HIERARCHY_QUERY_KEY } from '../../../constants'

export default function AddVip() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        mutate: createVipMutation, 
    } = useCreateAttendee([ATTENDEES_BY_HIERARCHY_QUERY_KEY])

    const { register, handleSubmit, reset } = useForm<CreateNewAttendeeBody>()

    const handleCreateVipSubmit: SubmitHandler<CreateNewAttendeeBody> = (body) => {
        createVipMutation(body, {
            onSuccess: () => {
                reset()
                onClose()
            },
        })
    } 

    const handleOpenModal = () => {
        reset()
        onOpen()
    }
    
    return (
        <>
            <Button onClick={handleOpenModal} colorScheme='blue'>New VIP</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Insert New First Timer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' flexDirection='column' gap='2'>
                        <Input 
                            placeholder='First Name' 
                            {...register("first_name")}
                        />
                        <Input 
                            placeholder='Last Name' 
                            {...register("last_name")}
                        />
                        <Input 
                            placeholder='Who Invited You?' 
                            {...register("invited_by")}
                        />
                        <Select 
                            placeholder='Member Status'
                            {...register("member_status")}
                        >
                            <option value='First Timer'>First Timer</option>
                            <option value='Second Timer'>Second Timer</option>
                            <option value='Third Timer'>Third Timer</option>
                            <option value='Fourth Timer'>Fourth Timer</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button 
                            variant='ghost'
                            onClick={handleSubmit(handleCreateVipSubmit)}
                        >
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
