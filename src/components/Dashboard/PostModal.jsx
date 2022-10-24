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

const PostModal = ({ isOpen, onClose }) => {
  const [values, setValues] = useState();

  const HandleChangeValues = (value) => {
      setValues(prevValue =>({
          ...prevValue,
          [value.target.name]: value.target.value,
      }))
  };

  const HandleSubmit = (e) => {
    Axios.post("http://localhost:5000/post/insert", {
      id_autor: values.id_autor,
      tipo: values.tipo,
      titulo: values.titulo,
      texto: values.texto,
      img: values.img,
    }).then(history.go(0))
}
  
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
                <FormLabel>Autor</FormLabel>
                <Input
                  type="text"
                  name="id_autor"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>Tipo</FormLabel>
                <Input
                  type="text"
                  name="tipo"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>Título</FormLabel>
                <Input
                  type="text"
                  name="titulo"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>Texto</FormLabel>
                <Input
                  type="text"
                  name="texto"
                  onChange={HandleChangeValues}
                />
              </Box>
              <Box>
                <FormLabel>Título</FormLabel>
                <Input
                  type="file"
                  name="img"
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

export default PostModal;