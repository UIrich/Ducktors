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
  
  const PostModal = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [title, setTitle] = useState(dataEdit.title || "");
    const [text, setText] = useState(dataEdit.text || "");
  
    const handleSave = () => {
      if (!title || !text) return;
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { title, text };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { title, text }]
        : [...(data ? data : [])];
  
      localStorage.setItem("post", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nova postagem</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    value={text}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Texto</FormLabel>
                  <Input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
  
  export default PostModal;