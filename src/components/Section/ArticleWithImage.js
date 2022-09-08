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
  useDisclosure,
} from "@chakra-ui/react";
import { LoremIpsum as Lorem } from 'react-lorem-ipsum';

import PostImage from '../../assets/image.svg';
import AvatarImage from '../../assets/duck.svg';

export default function ArticleWithImage(){
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
      <Box
        mx="auto"
        rounded="lg"
        borderRadius="lg" 
        overflow="hidden"
        boxShadow={'md'}
        bg={useColorModeValue('white', 'gray.900')}
        maxW="7xl"
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
          roundedTop="lg"
          w="5xl"
          h={400}
          fit="cover"
          src={PostImage}
          onClick={onOpen}
          cursor={'pointer'}
          alt="Article"
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
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              Lorem ipsum
            </Link>
          </Box>

          <Box mt={4}>
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
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                08 JUL 2022
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
  );
};

