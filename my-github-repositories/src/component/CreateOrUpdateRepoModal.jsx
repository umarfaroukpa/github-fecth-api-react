// CreateOrUpdateRepoModal.jsx
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input } from '@chakra-ui/react';

function CreateOrUpdateRepoModal({ isOpen, onClose, onSubmit, repo = null }) {
  const [name, setName] = useState(repo ? repo.name : '');
  const [description, setDescription] = useState(repo ? repo.description : '');

  const handleSubmit = () => {
    const formData = {
      name,
      description
    };
    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} position="absolute" top={0} right={0}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{repo ? 'Update Repository' : 'Create New Repository'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Repository Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} mt={4} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            {repo ? 'Update' : 'Create'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateOrUpdateRepoModal;
