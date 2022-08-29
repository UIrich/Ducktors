import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Text,
  Wrap,
  Container,
} from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Container maxW={'6xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
      </Box>
      <Heading as="h2" marginTop="5">
        Política de privacidade
      </Heading>
      <Divider marginTop="5" maxW="5xl"/>
      <Wrap spacing="30px" marginTop="5">
        <Text 
        fontWeight={400}
        fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec erat ut lectus pharetra semper. Duis quam leo, gravida a bibendum vitae, malesuada ac dui. Nam suscipit lectus nec facilisis varius. Etiam hendrerit lorem nulla, in venenatis metus ultrices a. Integer iaculis ligula a est scelerisque mattis. Aliquam turpis mi, tincidunt a sem ut, tincidunt volutpat mi. Nam nunc massa, molestie ut magna sit amet, laoreet egestas nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vel volutpat urna, eu tincidunt mauris. Vivamus nec volutpat erat, vitae semper diam. Duis maximus condimentum molestie. Praesent quis lorem lorem. In hac habitasse platea dictumst. Duis sodales gravida massa vitae hendrerit.
        </Text>

      </Wrap>
    </Container>
  );
};

export default Privacy;