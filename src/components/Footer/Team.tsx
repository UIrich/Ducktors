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
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        lineHeight={1.8}
        fontSize={'lg'}>
            Conheça um pouco da nossa equipe.
        </Text>
      </Wrap>
    </Container>
  );
};

export default Team;