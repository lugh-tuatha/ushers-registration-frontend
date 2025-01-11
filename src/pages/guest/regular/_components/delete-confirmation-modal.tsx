import { 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
 } from "@chakra-ui/react";

import { FaRegTrashAlt } from "react-icons/fa";

import { useMutateDeleteAttendee } from "../../../../hooks"

interface Props {
    id: string
}
function DeleteConfirmationModal({ id }: Props) {
    const { mutate: deleteAttendeeMutation } = useMutateDeleteAttendee()
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = (id: string) => {
        deleteAttendeeMutation(id)
        onClose()
    }

    return (
        <>
            <FaRegTrashAlt onClick={onOpen} size={20} color='red' cursor='pointer'/>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />    
                <ModalContent>
                    <ModalHeader>Delete Confirmation!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure you want to delete this? This action cannot be undone.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleDelete(id)}>
                            Yes
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteConfirmationModal