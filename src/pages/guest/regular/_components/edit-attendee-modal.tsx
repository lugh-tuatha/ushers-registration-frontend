import { SubmitHandler, useForm } from 'react-hook-form';

import {     
    useDisclosure,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Select,
    Textarea,
    FormControl,
} from '@chakra-ui/react'

import { FaRegEdit } from "react-icons/fa";

import { useAttendee, useGetLeaderAttendees, useUpdateAttendee } from '../../../../hooks';
import { UpdateAttendeeBody } from '../../../../types';

interface Props {
    attendeeId: string
}

export default function EditAttendeeModal({ attendeeId }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const {
        data
    } = useAttendee(attendeeId)

    const { 
        data: leaderData
    } = useGetLeaderAttendees()
    const { 
        mutate: updateAttendeeMutation, 
        isPending: isCreateAttendeePending
    } = useUpdateAttendee()

    const { register, handleSubmit, reset } = useForm<UpdateAttendeeBody>()

    const handleUpdateAttendeeSubmit: SubmitHandler<UpdateAttendeeBody> = (body) => {
        updateAttendeeMutation(body, {
            onSuccess: () => {
                onClose()
            }
        })
    } 

    const handleOpenModal = () => {
        reset(data)
        onOpen()
    }

    return (
        <>
            <FaRegEdit size={20} cursor='pointer' onClick={handleOpenModal}/>

            <Modal size='xl' isOpen={isOpen} onClose={onClose}> 
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Attendee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' gap='8'>
                        <FormControl display='flex' flexDirection='column' gap='2' width='50%'>
                            <Text>Personal Information</Text>
                            <Input 
                                placeholder='First Name' 
                                {...register("first_name")}
                            />
                            <Input 
                                placeholder='Last Name' 
                                {...register("last_name")}
                            />
                            <Input 
                                type='number'
                                placeholder='Age' 
                                {...register("age")}
                            />
                            <Select 
                                placeholder='Status' 
                                {...register("status")}
                            >
                                <option value='Single'>Single</option>
                                <option value='Married'>Married</option>
                                <option value='Divorced'>Divorced</option>
                                <option value='Widowed'>Widowed</option>
                            </Select>
                            <Textarea
                                placeholder='Address' 
                                {...register("address")}
                            />
                        </FormControl>
                        <FormControl display='flex' flexDirection='column' width='50%' gap='2'>
                            <Text textAlign='right'>Church Role Information</Text>
                            <Select 
                                placeholder='Primary Leader'
                                {...register("primary_leader")}
                            >
                                {leaderData?.map((leader: any) => (
                                    <option 
                                        key={leader._id} 
                                        value={`${leader.first_name} ${leader.last_name}`}
                                    >
                                        {leader.first_name} {leader.last_name}
                                    </option>
                                ))}
                            </Select>
                            <Select 
                                placeholder='Net'
                                {...register("network")}
                            >
                                <option value='Young'>Youth</option>
                                <option value='Young Pro'>Young Pro</option>
                                <option value='Mother'>Mother</option>
                                <option value='Father'>Father</option>
                                <option value='Husband'>Husband</option>
                                <option value='Wife'>Wife</option>
                            </Select>
                            <Select 
                                placeholder='Church Hierarchy'
                                {...register("church_hierarchy")}
                            >
                                <option value='Cell Member'>Cell Member</option>
                                <option value='Cell Leader'>Cell Leader</option>
                                <option value='Primary Leader'>Primary Leader</option>
                                <option value='Elder'>Elder</option>
                                <option value='Pastor'>Pastor</option>
                            </Select>
                            <Select 
                                placeholder='Member Status'
                                {...register("member_status")}
                            >
                                <option value='Regular Attendees'>Regular Attendees</option>
                                <option value='Regular Disciple'>Regular Disciple</option>
                                <option value='Regular Startup'>Regular Startup</option>
                                <option value='Back to Life'>Back to Life</option>
                            </Select>
                            <Select 
                                placeholder='Church Process'
                                {...register("church_process")}
                            >
                                <option value='Start Up Lesson'>Start Up Lesson</option>
                                <option value='Pre-Encounter'>Pre-Encounter</option>
                                <option value='Post-Encounter'>Post-Encounter</option>
                                <option value='SOL 1'>SOL 1</option>
                                <option value='Undercover'>Undercover</option>
                                <option value='SOL 2'>SOL 2</option>
                                <option value='SOL 3'>SOL 3</option>
                                <option value='Pastoral Ministry'>Pastoral Ministry</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
            
                        <Button 
                            variant='ghost' 
                            onClick={handleSubmit(handleUpdateAttendeeSubmit)}
                            disabled={isCreateAttendeePending}
                        >
                            {isCreateAttendeePending ? 'Creating...' : 'Update Attendee'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
