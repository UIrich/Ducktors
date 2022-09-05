import React from 'react';
import {
  Box,
  Heading,
  Divider,
  SimpleGrid,
  Text,
  Wrap,
  Container,
} from '@chakra-ui/react';
import Card from './Card.js'

const Team = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Equipe
      </Heading>
      <Divider marginTop="5" maxW="6xl"/>
      <Wrap spacing="30px" mt="60px">
        </Wrap>
          <Card/>
    </Container>

  );
};

export default Team;