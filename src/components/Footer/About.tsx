import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  SlideFade,
  Container,
} from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <SlideFade in offsetX={60}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Sobre
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        lineHeight={1.8}
        fontSize={'lg'}>
            A Ducktors é uma rede social voltada ao mundo geek, no qual os indivíduos desse "mundo" se interessam por tudo que está relacionado à tecnologia e eletrônica.
        </Text>
      </Wrap>
      </SlideFade>
    </Container>
  );
};

export default About;