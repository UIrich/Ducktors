import React from "react";
import { 
  Box, 
  Flex, 
  Image, 
  Link, 
  chakra, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader,  
  ModalCloseButton,
  ModalBody, 
  ModalFooter, 
  Button,
  useColorModeValue,
  useDisclosure 
} from "@chakra-ui/react";
import PostImage from '../../assets/image.svg';
import { LoremIpsum as Lorem } from 'react-lorem-ipsum';
import AvatarImage from '../../assets/duck.svg';

export default function Article(){
  const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRadius="lg" 
        overflow="hidden"
        rounded="lg"
        boxShadow={'md'}
        maxW="6xl"
      >
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lorem ipsum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
            mb={5}
            width="100%"
            rounded="lg"
            src={PostImage}
            alt="Avatar"
            />
          <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button 
            color={'white'} 
            bg='blue.400' 
            mr={3} 
            onClick={onClose}
            _hover={{
              bg: 'blue.600',
            }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            <Image
            transform="scale(1.0)"
            src={PostImage}
            alt="Image"
            objectFit="contain"
            width="100%"
            onClick={onOpen}
            cursor={'pointer'}
            transition="0.3s ease-in-out"
            _hover={{
                    transform: 'scale(1.05)',
            }}
            />

            <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{ color: "brand.400" }}
              >
                Tag
              </chakra.span>
              <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              onClick={onOpen}
              mt={1}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              Lorem ipsum
            </Link>
            <Box mt={2}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src={AvatarImage}
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  Nick
                </Link>
            </Flex>
            </Flex>
            </Box>
            </Box>
            </Box>
            </Box>
    );
};

