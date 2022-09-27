import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const GroupModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [community, setCommunity] = useState(dataEdit.community || "");
  
    const handleSave = () => {
      if (!community) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { community };
      }
  
      if (communityAlreadyExists()) {
        return alert("Já existe uma comunidade com esse nome!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { community };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { title, text }]
        : [...(data ? data : [])];
  
      localStorage.setItem("post", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const communityAlreadyExists = () => {
      if (dataEdit.community !== community && data?.length) {
        return data.find((item) => item.community === community);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Novo grupo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Salvar
              </Button>
              <Button colorScheme="gray" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default GroupModal;