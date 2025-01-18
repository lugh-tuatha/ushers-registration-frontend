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
    useToast,
} from '@chakra-ui/react'
import { useCreateAttendee } from '../../../../hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateNewAttendeeBody } from '../../../../types'
import { ATTENDEES_BY_HIERARCHY_QUERY_KEY } from '../../../../constants'
import moment from 'moment'
import { useMutatecheckIn } from '../../../../hooks/use-attendance'

export default function AddVip() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();
    const { mutate } = useMutatecheckIn()

    const { 
        mutate: createVipMutation, 
    } = useCreateAttendee([ATTENDEES_BY_HIERARCHY_QUERY_KEY])

    const { register, handleSubmit, reset } = useForm<CreateNewAttendeeBody>()

    const handleCreateVipSubmit: SubmitHandler<CreateNewAttendeeBody> = (body) => {
        createVipMutation(body, {
            onSuccess: (data) => {
                reset()
                onClose()
                markPresent(data.data.data._id)
            }
        })
    } 

    const markPresent = (id: string, first_name?: string) => {
        let attendance_type = "sunday"

        if(moment().format('ddd') == "Wed"){
            attendance_type = "prayer-night"
        }
        
        mutate({
            week_no: moment(new Date()).isoWeek(),
            attendee: id,
            time_in: new Date(),
            attendance_type: attendance_type
        }, 
        {
            onSuccess: () => {
                toast({
                    title: 'Presence marked!',
                    description: `Thank you for attending today, ${first_name || id}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            },
            onError: () => {
                toast({
                    title: 'Error!',
                    description: `${first_name} not found. Please check the attendee details.`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right',
                });
            }
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
                            <option value='first-timer'>First Timer</option>
                            <option value='second-timer'>Second Timer</option>
                            <option value='third-timer'>Third Timer</option>
                            <option value='fourth-timer'>Fourth Timer</option>
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
