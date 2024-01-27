import { Box, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página não encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        A página que você está procurando não existe.
      </Text>

      <Button
        as='a'
        colorScheme="blue"
        bgGradient="linear(to-r, blue.200, blue.500, blue.600)"
        color="white"
        href='/'
        variant="solid">
        Voltar
      </Button>
    </Box>
  );
}