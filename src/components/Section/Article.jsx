import React from "react";
import { 
  Box, 
  Flex, 
  Image, 
  Link, 
  chakra,
  Text, 
  useColorModeValue,
} from "@chakra-ui/react";
import Axios from 'axios';
import AvatarImage from '../../assets/duck.svg';
import { useEffect, useState } from 'react';

export default function Article(){
  
  const [posts, setPosts] = useState([]);

  function LoadPosts() {
    Axios.get("http://localhost:5000/post/get").then((res) => {
      setPosts(res.data.reverse());
    });
  }

  useEffect(() => {
    LoadPosts();
  }, []);

    return (
      <>
        {posts.map((data) => (
        <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="md" 
        overflow="hidden"
        rounded="lg"
        value={data}
        maxW="6xl"
      >
            <Image
            transform="scale(1.0)"
            src={data.img}
            alt="Image"
            objectFit="contain"
            width="100%"
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
                {data.tipo}
              </chakra.span>
              <Text mt={2} color={'brand.600'}>
              {data.texto}
            </Text>
              <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={1}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              {data.titulo}
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
                  {data.id_autor}
                </Link>
            </Flex>
            </Flex>
            </Box>
            </Box>
            </Box>
            </Box>
            ))}
            </>
    );
};

