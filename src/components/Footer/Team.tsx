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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris lectus, ultricies sed erat eget, tristique ullamcorper augue. Sed at nunc dui. Nulla dapibus vel erat eu condimentum. Quisque et egestas eros. Aliquam erat volutpat. In dignissim turpis diam, eget pharetra ex pretium quis. Aenean molestie tortor ut libero finibus, vitae fermentum diam blandit. Phasellus tincidunt neque sed sapien rhoncus, in aliquam sem volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque hendrerit erat ut porta gravida.
        </Text>
      </Wrap>
    </Container>
  );
};

export default Team;