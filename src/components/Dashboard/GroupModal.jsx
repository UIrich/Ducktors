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
  import Axios from "axios";
  
  const GroupModal = ({ isOpen, onClose }) => {
    const [values, setValues] = useState();

    const HandleChangeValues = (value) => {
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };
  
    const HandleSubmit = (e) => {
      Axios.post("http://localhost:5000/community/insert", {
        nome: values.nome,
      }).then(history.go(0))
  }
  
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
                    maxlength="30"
                    placeholder="Nome"
                    name="nome"
                    onChange={HandleChangeValues}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="blue" mr={3} onClick={HandleSubmit}>
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