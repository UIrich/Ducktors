import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import PostImage from '../../assets/trigun.svg';
import AvatarImage from '../../assets/duck.svg';

export default function Article(){
    return (
        <Box
        mx="auto"
        borderRadius="lg" 
        overflow="hidden"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="7xl"
      >
            <Image
            transform="scale(1.0)"
            src={
            PostImage
            }
            alt="Trigun"
            objectFit="contain"
            width="100%"
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
                Anime
              </chakra.span>
              <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={1}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              Um clássico dos animes
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
                  Ulrich
                </Link>
                <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                08 JUL 2022
              </chakra.span>
            </Flex>
            </Flex>
            </Box>
            </Box>
            </Box>
            </Box>
    );
};

