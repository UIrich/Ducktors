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

const UserModal = ({ isOpen, onClose }) => {
  const [values, setValues] = useState();

  const HandleChangeValues = (value) => {
      setValues(prevValue =>({
          ...prevValue,
          [value.target.name]: value.target.value,
      }))
  };

  const HandleSubmit = (e) => {
    Axios.post("http://localhost:5000/user/insert", {
      nick: values.nick,
      email: values.email,
      senha: values.senha
    }).then(history.go(0))
}
  
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nick</FormLabel>
                <Input
                  type="text"
                  placeholder="Nick"
                  maxlength="25"
                  name="nick"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="E-mail"
                  maxlength="30"
                  name="email"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Senha"
                  maxlength="128"
                  name="senha"
                  onChange={HandleChangeValues}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="blue" mr={3} onClick={()=>HandleSubmit()}>
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

export default UserModal;