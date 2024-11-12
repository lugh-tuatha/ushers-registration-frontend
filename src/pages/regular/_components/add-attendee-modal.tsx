import { SubmitHandler, useForm } from 'react-hook-form';

import {     
    Box,
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

import { useCreateAttendee } from '../../../hooks';
import { CreateNewAttendeeBody } from '../../../types';

export default function AddAttendeeModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        mutate: createAttendeeMutation, 
        isSuccess: isCreateAttendeeSuccess, 
        isPending: isCreateAttendeePending
    } = useCreateAttendee()

    const { register, handleSubmit, reset } = useForm<CreateNewAttendeeBody>()

    const handleCreateAttendeeSubmit: SubmitHandler<CreateNewAttendeeBody> = (body) => {
        createAttendeeMutation(body)

        if(isCreateAttendeeSuccess){
            onClose()
        }
    } 

    const handleOpenModal = () => {
        reset()
        onOpen()
    }

    return (
        <Box>
            <Button colorScheme='blue' onClick={handleOpenModal}>New Account +</Button>

            <Modal size='xl' isOpen={isOpen} onClose={onClose}> 
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Insert New Attendee</ModalHeader>
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
                                <option value='Ps. Alip Aspiras'>
                                    Ps. Alip Aspiras
                                </option>
                                <option value='Ps. Arven Lucas'>
                                    Ps. Arven Lucas
                                </option>
                                <option value='Bro. Justin Egonia'>
                                    Bro. Justin Egonia
                                </option>
                                <option value='Aldrin Cabatbat'>
                                    Aldrin Cabatbat
                                </option>
                                <option value='Jasper Neil Mariano'>
                                    Jasper Neil Mariano
                                </option>
                                <option value='Rappha Torres'>
                                    Rappha Torres
                                </option>
                                <option value='Leandro Bernal'>
                                    Leandro Bernal
                                </option>
                                <option value='Jun Rebusora/Elmer Navales'>
                                    Jun Rebusora/Elmer Navales
                                </option>
                                <option value='Harold Mendoza/Warren Dumayac'>
                                    Harold Mendoza/Warren Dumayac
                                </option>
                                <option value='Jexcel Tenorio/Robert Ritual'>
                                    Jexcel Tenorio/Robert Ritual
                                </option>
                                <option value='Ps. Issa Aspiras'>
                                    Ps. Issa Aspiras
                                </option>
                                <option value='Ps. Daisy Marie Lucas'>
                                    Ps. Daisy Marie Lucas
                                </option>
                                <option value='Mariecar Navales'>
                                    Mariecar Navales
                                </option>
                                <option value='Arch Cawaling'>
                                    Arch Cawaling
                                </option>
                                <option value='Angielyn Cabanting'>
                                    Angielyn Cabanting
                                </option>
                                <option value='Gina Garcia'>
                                    Gina Garcia
                                </option>
                                <option value='Graciella Faith Aspiras'>
                                    Graciella Faith Aspiras
                                </option>
                                <option value='Karissa Marie Torres'>
                                    Karissa Marie Torres
                                </option>
                                <option value='Susan Gubatana'>
                                    Susan Gubatana
                                </option>
                                <option value='Janine Egonia/Mysa Valderama'>
                                Janine Egonia/Mysa Valderama
                                </option>
                                <option value='Merlyn Cabatbat/Janiene Dumayac'>
                                    Merlyn Cabatbat/Janiene Dumayac
                                </option>
                                <option value='Venalyn Martinez/Shane Malicdem/Jhona Mae Sabio'>
                                    Venalyn Martinez/Shane Malicdem/Jhona Mae Sabio
                                </option>
                                
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
                            onClick={handleSubmit(handleCreateAttendeeSubmit)}
                            disabled={isCreateAttendeePending}
                        >
                            {isCreateAttendeePending ? 'Creating...' : 'Insert Attendee'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
        
    )
}
